import platforms from "./platforms";
import { utmCampaign, utmContent, utmTerm } from "./utmVars";

const showHintText = (source) => {
	const isExistCampaignDesc = platforms[source].utm_campaign_desc;
	const isExistContentDesc = platforms[source].utm_content_desc;
	const isExistTermDesc = platforms[source].utm_term_desc;
	
	if (isExistCampaignDesc) {
		utmCampaign.nextElementSibling.textContent = platforms[source].utm_campaign_desc;
		utmCampaign.nextElementSibling.classList.add('form__hint_show');
	} else {
		utmContent.nextElementSibling.classList.remove('form__hint_show');
	}

	if (isExistContentDesc) {
		utmContent.nextElementSibling.textContent = platforms[source].utm_content_desc
		utmContent.nextElementSibling.classList.add('form__hint_show');
	} else {
		utmContent.nextElementSibling.classList.remove('form__hint_show');
	}

	if (isExistTermDesc) {
		utmTerm.nextElementSibling.textContent = platforms[source].utm_term_desc
		utmTerm.nextElementSibling.classList.add('form__hint_show');
	} else {
		utmTerm.nextElementSibling.classList.remove('form__hint_show');
	}
}

export default showHintText