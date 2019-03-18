// var banner = document.querySelector('.banner');
// var nav = document.querySelector('nav');
// var contacts = document.querySelector('.contacts');
// contacts.addEventListener('click', (function(event) {
// 	console.log('done');
// 	var footer = document.querySelector('footer');
// 	footer.classList.add('openContacts');
// 	footer.classList.remove('hiddenContacts');
// 	banner.classList.add('openBanner');
// 	banner.classList.remove('banner');
// 	nav.classList.add('openNav');
// 	nav.classList.remove('nav');

// 	// event.target.classList.add('showContacts');
// 	console.log('yes');
// }));

var about = document.querySelector('.about');
about.addEventListener('click', (function() {
	var aboutSection = document.querySelector('.aboutMe');
	about.classList.add('openContacts');
	about.classList.remove('aboutMe');
	console.log('hello')
}));