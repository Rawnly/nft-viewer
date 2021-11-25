import { styled } from './stitches.config';

const Button = styled( 'button', {
	background: 'rgba(255, 255, 255, .9)',
	color: 'black',
	border: 'none',
	padding: '8px 16px',
	borderRadius: 4,
	fontWeight: 500,
	'&:hover': {
		cursor: 'pointer',
		background: 'white'
	},
	variants: {
		color: {
			info: {
				background: '$cyan3',
				color: '$cyan11',
				"&:hover": {
					background: '$cyan4',
				}
			},
			danger: {
				background: '$tomato3',
				color: '$tomato11',
				"&:hover": {
					background: '$tomato4',
				}
			},
			success: {
				background: '$mint3',
				color: '$mint11',
				"&:hover": {
					background: '$mint4',
				}
			},
			warning: {
				background: '$amber3',
				color: '$amber11',
				"&:hover": {
					background: '$amber4',
				}
			},
			secondary: {
				background: '$gray3',
				color: '$gray11',
				"&:hover": {
					background: '$gray4',
				}
			},
			transparent: {
				background: 'transparent',
				color: '$gray11',
				"&:hover": {
					background: '$gray1',
				}
			},
		},
		style: {
			outline: {
				background: 'transparent',
				border: '1px solid $gray7',
				'&:hover': {
					background: 'transparent',
					borderColor: "$gray8"
				}
			}
		}
	},
	compoundVariants: [
		{
			color: 'info',
			style: 'outline',
			css: {
				borderColor: '$cyan7',
				'&:hover': {
					borderColor: "$cyan8"
				}
			}
		},
		{
			color: 'success',
			style: 'outline',
			css: {
				borderColor: '$mint7',
				'&:hover': {
					borderColor: "$mint8"
				}
			}
		},
		{
			color: 'danger',
			style: 'outline',
			css: {
				borderColor: '$tomato7',
				'&:hover': {
					borderColor: "$tomato8"
				}
			}
		},
		{
			color: 'warning',
			style: 'outline',
			css: {
				borderColor: '$amber7',
				'&:hover': {
					borderColor: "$amber8"
				}
			}
		},
		{
			color: 'secondary',
			style: 'outline',
			css: {
				borderColor: '$gray7',
				'&:hover': {
					borderColor: "$gray8"
				}
			}
		},
	]
} )

export default Button;
