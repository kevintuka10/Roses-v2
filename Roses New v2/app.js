const revealElements = document.querySelectorAll(".inner-container");
const fadeElements = document.querySelectorAll('.inner-container');

scrollAnim = () => {
	let windowHt = window.innerHeight;
	revealElements.forEach(elements => {
		let elementPos = elements.getBoundingClientRect().top;
		if (elementPos <= windowHt / 1.3 ) {
			elements.classList.add('revealed');
		}
	});
	fadeElements.forEach(element => {
		let elementPos = element.getBoundingClientRect().top;
		if (elementPos <= windowHt / 1.3 ) {
			element.classList.add('faded-in');
		}
	});
}

document.addEventListener("DOMContentLoaded", scrollAnim);

window.addEventListener('scroll', scrollAnim);