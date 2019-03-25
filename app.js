var banner = document.querySelector('.banner');
var nav = document.querySelector('nav');
var contacts = document.querySelector('.contacts');
var aboutSection = document.querySelector('.aboutMe');
var footer = document.querySelector('footer');
var openProjects = document.querySelector('.main');
var about = document.querySelector('.about');
var projects = document.querySelector('.projects');
var descriptions = document.getElementsByClassName('description');
var myStory = document.getElementsByClassName('content');

function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};
function openBanner() {
	banner.classList.add('openBanner');
	banner.classList.remove('closedBanner');
};
function closeBanner() {
	banner.classList.remove('openBanner');
	banner.classList.add('closedBanner');
};
function openContacts() {
	footer.classList.add('openContacts');
	footer.classList.remove('hiddenContacts');
};
function closeContacts() {
	footer.classList.remove('openContacts');
	footer.classList.add('hiddenContacts');
};
function openAllProjects() {
	openProjects.classList.add('openMain');
	openProjects.classList.remove('hiddenMain');
	for (var description of descriptions) {
		description.tabIndex = 0;
	}
};
function closeProjects() {
	openProjects.classList.remove('openMain');
	openProjects.classList.add('hiddenMain');
	for (var description of descriptions) {
		description.tabIndex = -1;
	}
};
function openAbout() {
	aboutSection.classList.add('openAbout');
	aboutSection.classList.remove('hiddenAbout');
	console.log(myStory);
	myStory.tabIndex = 0;
};
function closeAbout() {
	aboutSection.classList.remove('openAbout');
	aboutSection.classList.add('hiddenAbout');
};
function openNav() {
	nav.classList.add('openNav');
	nav.classList.remove('closedNav');
};
function closeNav() {
	nav.classList.add('closedNav');
	nav.classList.remove('openNav');
};
contacts.addEventListener('click', (function(event) {
	if(hasClass(banner, 'closedBanner')) {
		openContacts();
		openBanner();
		openNav();
	} else if(hasClass(banner, 'openBanner') && hasClass(aboutSection,'openAbout')) {
		openContacts();
		closeAbout();
	} else if(hasClass(banner, 'openBanner') && hasClass(openProjects, 'openMain')) {
		openContacts();
		closeProjects();
	} else if(hasClass(banner, 'openBanner') && hasClass(footer,'openContacts')) {
		closeBanner();
		closeContacts();
		closeNav();
	}	
}));

about.addEventListener('click', (function(event) {
	if(hasClass(banner, 'closedBanner')) {
		openAbout();
		openBanner();
		openNav();
	} else if(hasClass(banner, 'openBanner') && hasClass(openProjects, 'openMain')) {
		openAbout();
		closeProjects();
	} else if(hasClass(banner, 'openBanner') && hasClass(footer,'openContacts')) {
		openAbout();
		closeContacts();
	} else if(hasClass(banner, 'openBanner') && hasClass(aboutSection,'openAbout')) {
		closeAbout();
		closeBanner();
		closeNav();
	}
}));

projects.addEventListener('click', (function(event) { 
	if(hasClass(banner, 'closedBanner')) {
		openAllProjects();
		openBanner();
		openNav();
	} else if(hasClass(banner, 'openBanner') && hasClass(aboutSection,'openAbout')) {
		openAllProjects();
		closeAbout();
	} else if(hasClass(banner, 'openBanner') && hasClass(openProjects, 'openMain')) {
		closeBanner();
		closeProjects();
		closeNav();
		
	} else if(hasClass(banner, 'openBanner') && hasClass(footer,'openContacts')) {
		openAllProjects();
		closeContacts();
	}
}));



