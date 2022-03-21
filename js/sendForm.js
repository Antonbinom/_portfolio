const sendForm = () => {

	const forms = document.querySelectorAll('form')

	forms.forEach(form => {

		form.addEventListener('submit', (e) => {
			e.preventDefault()

			// создаем конструктор для каждого импута из нашей формы
			const formData = new FormData(form)
			// создаем пустой объект в который будем передавать ключ и значение инуптов
			const body = {}

			// передаем в объект название формы с классом
			formData.append('form', form.classList.value)

			// перебираем каждый импут, получаем значение и название инпутов
			formData.forEach((value, field) => {
				// передаем в объект ключ и значение инпутов
				body[field] = value
			})

			fetch('https://jsonplaceholder.typicode.com/posts', {
					method: 'POST',
					body: JSON.stringify(body),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}).then(response => {
					// если у данных свойство ok = true
					if (response.ok) {
						// вернем данные в формате json
						return response.json()
					} else {
						// иначе выкинет ошибку
						throw new Error(response.status)
					}
				})
				// далее выводим данные в консоль
				.then(data => {
					alert('Данные отправленны успешно')
				})
				// выводим ошибку
				.catch(error => {
					alert('Данные отправленны с ошибкой ' + error.message)
				})
				// в самом конце отчистим форму
				.finally(() => {
					form.reset()
				})
		})
	})
}
sendForm()