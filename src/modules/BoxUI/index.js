(function() {
	
	// Handle the copy button action
	const handleCopyButtonState = (reference) => {
		reference.textContent = 'copied';
		setTimeout(() => {
			reference.textContent = 'copy'
		}, 2000)
	}
	
	// Copy
	const clipboardButton = new ClipboardJS('[data-copy-ui]');
	clipboardButton.on('success', function(e) {
		handleCopyButtonState(e.trigger)
		e.clearSelection();
	});

	// Toggle button
	const toggleUiButtons = [...document.querySelectorAll('[data-action-ui]')];
	const elementUis = [...document.querySelectorAll('[data-ui]')];

	const handleToggleUiButton = (e) => {
		const uiClicked = e.target.getAttribute('data-action-ui')
		const uiRelated = elementUis.find(item => item.getAttribute('data-ui') === uiClicked)

		uiRelated.firstChild.classList.toggle('is-active')
	}

	for(let i = 0; i < toggleUiButtons.length; i++) {
		toggleUiButtons[i].addEventListener('click', handleToggleUiButton)
	}
})()