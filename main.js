const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const secondPass = document.querySelector('#secondPassword');
const email = document.querySelector('#email');

const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const closeBtn = document.querySelector('.close');


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
	formBox.classList.remove('error');
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input, minValue) => {
	if (input.value.length < minValue) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} musi składać się z ${minValue} znaków`
		);
	}
};

const checkPasswords = (password, secondPassword) => {
	if (password.value !== secondPassword.value) {
		showError(secondPassword, `Hasła różnią się od siebie`);
	}
};

const checkMail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	if(re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny!')
	}
}

const countErrors = () => {
	const allInputs = document.querySelectorAll('.form-box');
	let counter = 0;

	allInputs.forEach(el => {
		if(el.classList.contains('error')) {
			counter++
		}
	})

	if(counter === 0){
		popup.classList.add('show-popup')
	}
}

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm(inputData);
	checkLength(username, 5);
	checkLength(pass, 8);
	checkPasswords(pass, secondPass);
	checkMail(email);
	countErrors();
});

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();

	inputData.forEach((el) => {
		el.value = '';
		clearError(el)
	});
});
