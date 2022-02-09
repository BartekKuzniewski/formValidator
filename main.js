const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const secondPass = document.querySelector('#secondPassword');
const email = document.querySelector('#email');

const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const closeBtn = document.querySelector('.close');

const errorMsg = document.querySelector('error-text');
const popup = document.querySelector('.popup');

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();
    [username, pass, secondPass, email].forEach( el => {
		el.value = ''
	});
});
