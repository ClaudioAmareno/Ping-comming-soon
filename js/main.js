const input = document.querySelector('.action-wrapper__input')
const button = document.querySelector('.action-wrapper__btn-email')
const error = document.querySelector('.action-wrapper__error')

function ValidateEmail() {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

	if (input.value.match(validRegex)) {
        error.style.display = 'none'
		input.style.borderColor = 'lime'
		return true
	} else {
		error.style.display = 'block'

		return false
	}
}

button.addEventListener('click', ValidateEmail)