import { radioInputs } from "./variables";
import showUtmSource from "./showUtmSource";

const radioInput = () => {
	radioInputs.forEach(el => {
		el.addEventListener('click', function() {
			const id = this.getAttribute('id');
			showUtmSource(id);
		})
	})
}

export default radioInput