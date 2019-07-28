const path = require('path')
const fs = require('fs');
const glob = require('glob')

// Paths
const uiSource = path.resolve(__dirname, './src/assets/uis')
const tempUi = path.resolve(__dirname, './src/assets/tempUi')

// CSS files
const entryFiles = glob.sync(`${uiSource}/**.css`)

// UI template
const uiTemplate = (magic) => (
`module.exports = \`
${magic}\`
`)

if (!fs.existsSync(tempUi)) {
	fs.mkdirSync(tempUi);
}

const buldFiles = (uiName) => {
	const uiContent = fs.readFileSync(`${uiSource}/${uiName}.css`, 'utf-8');
	fs.writeFileSync(`${tempUi}/${uiName}.js`, uiTemplate(uiContent));
}

for(let i = 0; i < entryFiles.length; i++) {
	const uiName = path.basename(entryFiles[i], path.extname(entryFiles[i]))
	buldFiles(uiName)
}