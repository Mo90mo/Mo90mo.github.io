var banner = document.querySelector('.banner');
var nav = document.querySelector('nav');
var contacts = document.querySelector('.contacts');
contacts.addEventListener('click', (function(event) {
	var footer = document.querySelector('footer');
	footer.classList.toggle('openContacts');
	footer.classList.toggle('hiddenContacts');
	changeBanner();
}));

var about = document.querySelector('.about');
about.addEventListener('click', (function(event) {
	var aboutSection = document.querySelector('.aboutMe');
	aboutSection.classList.toggle('openAbout');
	aboutSection.classList.toggle('hiddenAbout');
	changeBanner();
}));

var projects = document.querySelector('.projects');
projects.addEventListener('click', (function(event) {
	var openProjects = document.querySelector('.main');
	openProjects.classList.toggle('openMain');
	openProjects.classList.toggle('hiddenMain');
	
	console.log('main')
	changeBanner();

}))

function changeBanner() {
	banner.classList.toggle('openBanner');
	banner.classList.toggle('banner');
	nav.classList.toggle('openNav');
	nav.classList.toggle('nav');
}
