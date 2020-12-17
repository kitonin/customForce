let button = document.getElementById('hamburger-icon');
let popUp = document.getElementById('popup-menu');
let header = document.getElementById('header');

button.onclick = function() {
	if (popUp.style.display == 'none') {	
		popUp.style.display = 'block';
		button.classList.add('active');
		header.style.position = 'fixed';
	}
	else {
		button.classList.remove('active');
		popUp.classList.add('menu_out');
		header.style.position = '';
		setTimeout(function () {
			popUp.classList.remove('menu_out');
			popUp.style.display = 'none';
		},1000)
	}
}