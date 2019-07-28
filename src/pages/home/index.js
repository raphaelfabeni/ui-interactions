(function() {

	// Tabs
	const tabButtons = [...document.querySelectorAll('[data-tab-button]')];
	const tabContents = [...document.querySelectorAll('[data-tab-content]')];

	const handlerTabClick = (e) => {
		const tabClicked = e.target.getAttribute('data-tab-button')
		const tabIndexClicked = e.target.getAttribute('data-tab-index')

		const relatedTabContent = tabContents.filter(item => item.getAttribute('data-tab-content') === tabClicked)
		relatedTabContent.forEach(content => content.classList.remove('is-active'))
		relatedTabContent.find(item => item.getAttribute('data-tab-index') === tabIndexClicked).classList.add('is-active');

		const tabsSiblings = tabButtons.filter(tab => tab.getAttribute('data-tab-button') === tabClicked)
		tabsSiblings.forEach(tab => tab.classList.remove('is-active'))
		e.target.classList.add('is-active');

	}

	for(let i = 0; i < tabButtons.length; i++) {
		tabButtons[i].addEventListener('click', handlerTabClick)
	}

})()