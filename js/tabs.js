const tabs = () => {
	const tabsBtn = document.querySelectorAll('.design-list__item')
	const tabsContent = document.querySelectorAll('.design__descr')
	const tabsWorks = document.querySelectorAll('.design-images')
	const tabsTitles = document.querySelectorAll('.design__title')
	const tabsImages = document.querySelectorAll('.design-block__img')

	const changeContent = (arr, value) => {
		arr.forEach((item) => {

			if (item.dataset.tabsField === value) {
				item.classList.remove('hidden')
				if (item.matches('h2')) {
					document.title = item.innerText
				}
			} else {
				item.classList.add('hidden')
			}
		})
	}

	tabsBtn.forEach((tabButton) => {
		tabButton.addEventListener('click', (e) => {
			const dataValue = tabButton.dataset.tabsHandler

			tabsBtn.forEach(btn => {
				btn === e.target ? btn.classList.add('design-list__item_active') :
					btn.classList.remove('design-list__item_active')
			})

			changeContent(tabsContent, dataValue)
			changeContent(tabsWorks, dataValue)
			changeContent(tabsTitles, dataValue)
			changeContent(tabsImages, dataValue)
		})
	})
}

tabs()