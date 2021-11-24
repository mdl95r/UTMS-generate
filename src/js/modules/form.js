import { form, inputIn } from "./variables";

const formInit = () => {
	window.addEventListener('resize', function() {
		form.style.paddingTop = '';
		inputIn.classList.remove('fixed');
	})
}

export default formInit
