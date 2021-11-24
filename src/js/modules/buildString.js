import { inputs } from "./variables";
import { utms } from "./utms";
import updateResults from './updateResults';

const buildString = () => {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('input', function () {
			i === 0 ? utms[i] = `?${this.dataset.id}=${this.value}` 
				: utms[i] = `&${this.dataset.id}=${this.value}`;

			if (inputs[i].value.length < 1) {
				utms[i] = null;
				updateResults();
			}
			updateResults();
		})
	}
}

export default buildString