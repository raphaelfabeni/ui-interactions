(function() {
	const gradient = document.querySelector('[data-gradient]')
	setInterval(() => {
		gradient.classList.toggle('is-active')
	}, 15000)
})()