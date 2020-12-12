let button = document.getElementById('hamburger-icon');
let popUp = document.getElementById('popup-menu');
let body = document.getElementById('body');
console.log(button);
console.log(popUp);
button.onclick = function() {
	if (popUp.style.display == 'none') {	
		popUp.style.display = 'block';
		button.classList.add('active');
		body.style.overflow = 'hidden';
	}
	else {
		popUp.style.display = 'none';
		button.classList.remove('active');
		body.style.overflow = '';
	}
}