import { inputIn, inputInOffsetTop, form } from "./variables";

const scrolling = () => {
	window.addEventListener('scroll', function() {
		const isMediaOver575 = window.matchMedia("only screen and (max-width : 575px)").matches;
		
		if (isMediaOver575) {
			const currentScroll = window.pageYOffset
			
			if (currentScroll > inputInOffsetTop + inputIn.offsetHeight) {
				inputIn.classList.add('fixed');
				form.style.paddingTop = `${inputIn.offsetHeight}px`;
			} else {
				inputIn.classList.remove('fixed');
				form.style.paddingTop = '';
			}
		}
	})
}

export default scrolling