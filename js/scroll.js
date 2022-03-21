const scroll = () => {

	const links = document.querySelectorAll('.menu-list__link')
	const btn = document.querySelector('.main__button')
	const next = document.querySelector('.main__scroll')

	const allLinks = [...links, btn, next]

	allLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault()

			const id = link.getAttribute('href').substring(1)
			const section = document.getElementById(id)

			if (section) {
				// подключаем библиотеку seamless-scroll-polyfill
				seamless.scrollIntoView(section, {
					block: 'start',
					behavior: 'smooth',
					inline: 'center'
				})
			}

		})
	})
}

scroll()