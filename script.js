const navSlide = ()=>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.link');
	const navLinks = document.querySelectorAll('.link li');


	burger.addEventListener('click',()=>{
		// burger
		nav.classList.toggle('active');
		burger.classList.toggle('toggle');

		// navLinks Animations
		navLinks.forEach((link, index) =>{
			if (link.style.animation) {
				link.style.animation = '';
			} else{
				link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			};
		});

	});

};

function smoothScroll(event){
    console.log(event.target);
}

navSlide();

