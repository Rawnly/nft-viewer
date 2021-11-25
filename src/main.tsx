import React from 'react'
import ReactDOM from 'react-dom'
import { applyGlobalStyle } from './components/stitches.config'
import { DAppProvider } from '@usedapp/core'

import App from './pages/App'

applyGlobalStyle()


ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById( 'root' )
)
