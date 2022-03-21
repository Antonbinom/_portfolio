const modal = () => {
	const modal = document.querySelector('.modal')
	const modalForm = document.querySelector('.modal__form')
	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('more')) modal.classList.toggle('hidden')
		else if (e.target.classList.contains('modal__close') || e.target.classList.contains('overlay')) {
			e.preventDefault()
			modal.classList.toggle('hidden')
		}
	})
	modalForm.addEventListener('submit', (e) => {
		e.preventDefault()
		modal.classList.toggle('hidden')
	})
}

modal()