const modal = () => {
	const modal = document.querySelector('.modal')

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('more')) modal.classList.toggle('hidden')
		else if (e.target.classList.contains('modal__close') || e.target.classList.contains('overlay') || e.target.classList.contains('modal__button')) {
			e.preventDefault()
			modal.classList.toggle('hidden')
		}
	})
}
modal()