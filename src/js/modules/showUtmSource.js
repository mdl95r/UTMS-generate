import { inputOut, inputIn, inputs, dropdownCurrent } from "./variables";
import { hints } from "./variables";
import { utms, changeUtm } from "./utms";
import { utmSource, utmMedium, utmCampaign, utmContent, utmTerm } from "./utmVars";
import platforms from "./platforms";
import showHintText from "./showHintText";
import updateResults from "./updateResults";

const showUtmSource = (id) => {
	const source = id;

	if (source === "own-choose-radio") {
		inputs.forEach(el => el.value = "")
		inputOut.value = dropdownCurrent.innerText + inputIn.value
		hints.forEach(el => {
			el.textContent = '';
			el.classList.remove('form__hint_show');
		});
		changeUtm([]);
		return
	}

	utmSource.value = platforms[source].utm_source;
	utmMedium.value = platforms[source].utm_medium;
	utmCampaign.value = platforms[source].utm_campaign;
	utmContent.value = platforms[source].utm_content;
	utmTerm.value = platforms[source].utm_term;
	
	showHintText(source);

	for (let i = 0; i < inputs.length; i++) {
		i === 0 ? utms[i] = `?${inputs[i].dataset.id}=${inputs[i].value}` 
			: utms[i] = `&${inputs[i].dataset.id}=${inputs[i].value}`;
		if (inputs[i].value.length < 1) {
			utms[i] = null;
			updateResults();
		}
		updateResults();
	}
}

export default showUtmSource;