const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const secondPass = document.querySelector('#secondPassword');
const email = document.querySelector('#email');

const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const closeBtn = document.querySelector('.close');

const errorMsg = document.querySelector('error-text');
const popup = document.querySelector('.popup');

const inputData = [username, pass, secondPass, email];

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			console.log('błąd');
		} else {
			console.log('ok');
		}
	});
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm(inputData);
});

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();
	inputData.forEach((el) => {
		el.value = '';
	});
});
