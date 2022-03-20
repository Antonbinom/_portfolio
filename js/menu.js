const menu = () => {

	const menuNav = document.querySelector('.menu')

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('humburger-menu')) menuNav.classList.add('menu-active')
		else if (!e.target.closest('.menu') || e.target.classList.contains('menu-list__link'))
			menuNav.classList.remove('menu-active')
	})
}
menu()