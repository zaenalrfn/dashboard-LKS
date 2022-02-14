var navLiA = document.querySelectorAll('.nav li a'),
	navUl = document.querySelector('.nav ul');

navLiA.forEach((liA) => {
	liA.addEventListener("click", function() {
		navUl = document.querySelector('.active').classList.remove('active');
		liA.classList.add('active');
	});
});