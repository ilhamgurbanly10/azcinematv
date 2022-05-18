
flashNavbarAnimations();


// sign-in

signInForm = () => {

	const form = document.querySelector('.sign-in-form');
	const email = form.querySelector('#email');
	const password = form.querySelector('#password');
	const submit = form.querySelector('.fl-form-submit');
	var emailIsEmpty = true, passwordIsEmpty = true;

	disableSubmit = () => { submit.setAttribute('disabled', ''); }

	enableSubmit = () => { submit.removeAttribute('disabled'); }

	function checkEmail() {

		this.value == "" ? emailIsEmpty = true : emailIsEmpty = false;

		!emailIsEmpty && !passwordIsEmpty ? enableSubmit() : disableSubmit();

	}

	function checkPassword() {

		this.value == "" ? passwordIsEmpty = true : passwordIsEmpty = false;

		!emailIsEmpty && !passwordIsEmpty ? enableSubmit() : disableSubmit();

	}

	email.addEventListener('keyup', checkEmail);
	password.addEventListener('keyup', checkPassword);

}

signInForm();

// the-end-of-sign-in