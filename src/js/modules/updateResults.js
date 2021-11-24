import { utms } from "./utms";
import { inputIn, dropdownCurrent, copyButton, inputOut } from "./variables";

const updateResults = (inputValue = inputIn.value, protocol = dropdownCurrent.innerText) => {
	inputValue.length  > 0 ? copyButton.removeAttribute('disabled') : copyButton.setAttribute('disabled', '');
	inputOut.value = inputValue.length  > 0 ? protocol +  inputValue  + '/' + utms.join('') : '';
}

export default updateResults