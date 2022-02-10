const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const secondPass = document.querySelector('#secondPassword');
const email = document.querySelector('#email');

const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const closeBtn = document.querySelector('.close');

// const errorMsg = document.querySelector('error-text');
const popup = document.querySelector('.popup');

const inputData = [username, pass, secondPass, email];

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input.parentElement;

	formBox.classList.remove('error')
}

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);

		} else {
			clearError(el)
		}
	});
};

const checkLength = (input, minValue) => {
		if(input.value.length < minValue){
			showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} musi składać się z ${minValue} znaków`)
		}
}



sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm(inputData);
	checkLength(username, 5)
	checkLength(pass, 8)
});

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();

	inputData.forEach((el) => {
		el.value = '';
	});
});
