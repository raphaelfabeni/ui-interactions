(function() {
	const uiElement = document.querySelector('[data-ui]')
	const holdElement = document.querySelector('body');

	holdElement.addEventListener('click', function() {
		uiElement.classList.toggle('is-active')
	})

})();