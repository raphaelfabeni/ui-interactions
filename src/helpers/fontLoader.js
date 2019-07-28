import FontFaceObserver from 'fontfaceobserver'

const appendLink = linkTag =>
	document.getElementsByTagName('head')[0].appendChild(linkTag)

const getLinkTag = linkName => {
	const src = `https://fonts.googleapis.com/css?family=${linkName}`
	const link = document.createElement('link')
	link.href = src
	link.rel = 'stylesheet'
	return link
}

const getFontPromise = fontName => new FontFaceObserver(fontName).load()

const fontLoader = fonts => Promise.all(fonts.map(({ name, weights }) => {
	const fontLinkName = `${name.replace(/ /g, '+')}:${weights.join(',')}`
	const linkTag = getLinkTag(fontLinkName)
	appendLink(linkTag)
	return getFontPromise(name)
})).then(() => {
	document
		.documentElement
		.classList
		.add('fonts-loaded')
})

export default fontLoader
