const timer = (deadline) => {

	const timerBlock = document.querySelector('.timer__time')
	let interval

	const updateClock = () => {
		const date = new Date().getTime()
		const dateDeadline = new Date(deadline).getTime()
		const timeRemaining = (dateDeadline - date) / 1000

		const days = Math.round(timeRemaining / 60 / 60 / 24)
		const hours = Math.round(timeRemaining / 60 / 60) % 24
		const minutes = Math.round(timeRemaining / 60) % 60
		const seconds = Math.round(timeRemaining % 60)


		// const fDays = days < 10 ? '0' + days : days
		const fHours = hours < 10 ? '0' + hours : hours
		const fMinutes = minutes < 10 ? '0' + minutes : minutes
		const fSeconds = seconds < 10 ? '0' + seconds : seconds

		timerBlock.textContent = `${days}дн / ${fHours}:${fMinutes}:${fSeconds}`

		if (timeRemaining <= 0) {
			clearInterval(interval)
			timerBlock.textContent = `00:00:00`
		}
	}

	setInterval(updateClock, 500)
}

timer('26 march 2022')