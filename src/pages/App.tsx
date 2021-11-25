import { formatEther } from '@ethersproject/units';
import { useEtherBalance, useEthers } from '@usedapp/core';
import React, { FC, useCallback, useEffect, useState } from "react";
import Button from '../components/Button';
import { keyframes, styled } from '../components/stitches.config';
import { Content, Root, Trigger } from '@radix-ui/react-tooltip'

interface IAppProps { }

const slideRightAndFade = keyframes( {
  '0%': { opacity: 0, transform: 'translateX(-5px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
} );

const slideLeftAndFade = keyframes( {
  '0%': { opacity: 0, transform: 'translateX(5px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
} );


const TooltipContent = styled( Content, {
  borderRadius: 4,
  padding: '10px 15px',
  backgroundColor: '$gray1',
  color: '$gray11',
  fontSize: 12,
  flexCenter: 'column',
  border: '1px solid $gray6',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="instant-open"]': {
    animationName: slideRightAndFade
  },
  '&[data-state="delayed-open"]': {
    animationName: slideRightAndFade
  },
} )

const Container = styled( 'div', {
  p: 36,
  flexCenter: 'column',
  viewportSize: 100,
  background: 'black',
  color: 'white'
} )

const shortenAddress = ( address: string, head: number = 5, tail: number = head ) => address.substr( 0, head ) + '...' + address.substr( address.length - tail )

const useClipboard = ( text: string, notifyTimeout: number = 2500 ): [string, () => void] => {
  const [copyStatus, setCopyStatus] = useState( 'inactive' )
  const copy = useCallback( () => {
    navigator.clipboard.writeText( text ).then(
      () => setCopyStatus( 'copied' ),
      () => setCopyStatus( 'failed' ),
    )
  }, [text] )

  useEffect( () => {
    if ( copyStatus === 'inactive' ) {
      return
    }

    const timeoutId = setTimeout( () => setCopyStatus( 'inactive' ), notifyTimeout )

    return () => clearTimeout( timeoutId )
  }, [copyStatus] )

  return [copyStatus, copy]
}



const App: FC<IAppProps> = ( props ) => {
  const { activateBrowserWallet, account, deactivate } = useEthers()
  const balance = useEtherBalance( account );
  const [_, copyAccountAddr] = useClipboard( account ?? '' )
  const [isTooltipVisible, setIsTooltipVisible] = useState( false )

  function onCopy() {
    copyAccountAddr()

    setIsTooltipVisible( true )

    setTimeout( () => {
      setIsTooltipVisible( false )
    }, 750 )
  }

  // const abiInterface = new Interface( [
  //   "function tokenURI(uint256 _tokenId) external view returns (string memory)",
  // ] )

  // const tokenURI = useContractCall( {
  //   abi: abiInterface,
  //   address: '0xa13325ba1b9493c02d364a4a41e646d24f532126',
  //   args: [79],
  //   method: 'tokenURI',
  // } )

  // console.log( tokenURI )

  return (
    <Container>
      {account
        ? (
          <>
            <h1 style={{ margin: 0 }}>
              {balance && formatEther( balance )} ETH
            </h1>
            <Root open={isTooltipVisible}>
              <TooltipContent side={'right'} sideOffset={5}>
                <span>Copied!</span>
              </TooltipContent>
              <Trigger asChild>
                <Button onClick={onCopy} color='transparent' css={{ mt: 10 }}>
                  {shortenAddress( account )}
                </Button>
              </Trigger>
            </Root>
            <Button color='danger' css={{ mt: 10 }} onClick={deactivate}>
              Disconnect
            </Button>
          </>
        )
        : (
          <Button onClick={() => activateBrowserWallet( console.error )}>
            Connect Wallet
          </Button>
        )
      }
    </Container>
  );
}

export default App;
