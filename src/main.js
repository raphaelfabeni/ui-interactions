// Modules
import './modules/BoxUI'
import './modules/Gradient'

// Helpers
import fontLoader from './helpers/fontLoader'

// Styles
import './stylus/main.styl'

const init = () => {
	fontLoader([{
		name: 'Maven Pro', weights: [400, 500, 700, 900]
	}])
}

init()