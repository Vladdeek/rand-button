const phrases = [
	'А может все-таки да?',
	'Почему бы и нет?',
	'Так мы едем катать?',
	'Да ну, серьезно?',
	'Ну давай же!',
	'Точно нет?',
	'Сомневаешься?',
	'Неужели нет?',
	'А вдруг?',
	'Подумай еще раз!',
	'Точно-так-то?',
	'Может передумаешь?',
	'Уверен?',
	'Ну пожалуйста!',
	'Последний шанс!',
	'На самом деле хочешь нет?',
	'Неужели нет?',
	'Ой, ну давай!',
	'А если да?',
	'Ну же, давай!',
	'Пидора ответ!',
	'Что? Не слышу',
]

function Rand() {
	// Установите границы в зависимости от устройства
	let maxrandy = window.innerHeight - 100 // высота экрана минус 100 пикселей для кнопки
	let maxrandx = window.innerWidth - 100 // ширина экрана минус 100 пикселей для кнопки

	var xrand = Math.floor(Math.random() * maxrandy)
	console.log('X - ', xrand)
	var yrand = Math.floor(Math.random() * maxrandx)
	console.log('Y - ', yrand)

	const nbutton = document.querySelector('.nbutton')
	const ybutton = document.querySelector('.ybutton')

	// Установите фиксированное значение для ybutton, если это необходимо
	ybutton.style.transform = 'translateX(0px)' // Центрирование кнопки

	nbutton.style.top = xrand + 'px'
	nbutton.style.left = yrand + 'px'

	// Выбор случайной фразы из массива
	const randtext = phrases[Math.floor(Math.random() * phrases.length)]

	var text = document.getElementById('Text')
	text.innerHTML = randtext
}

function Yes() {
	var text = document.getElementById('Text')
	text.innerHTML = 'Ура, поехали!)'

	const nbutton = document.querySelector('.nbutton')
	const ybutton = document.querySelector('.ybutton')

	nbutton.style.display = 'none'
	ybutton.style.transform = 'translateX(0px)' // Центрирование кнопки

	ybutton.addEventListener('click', () => {
		text.innerHTML = 'Я уже понял, подожди собираюсь!'
	})
}
