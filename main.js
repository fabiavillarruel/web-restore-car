let togglerBtn = document.querySelector('.toggle-btn');
let mobileNav = document.querySelector('.nav-items-container');
let showMobileMenu = false;
togglerBtn.addEventListener('click', ()=>{
	if(showMobileMenu){
		mobileNav.classList.add('showMobileNav');
		showMobileMenu = true;
	}
	else{
		mobileNav.classList.remove('showMobileNav');
		showMobileMenu = true;
	}
});