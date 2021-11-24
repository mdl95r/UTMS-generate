import { copyButton, inputOut, copySuccessful } from "./variables";

const copyBtn = () => {
	copyButton.addEventListener('click', function(e) {
		e.preventDefault();
		inputOut.select();
		document.execCommand('copy');
		copySuccessful.classList.remove('popup-copy-successful_hidden');
		setTimeout(function() {
			copySuccessful.classList.add('popup-copy-successful_hidden');
		},1500)
	})
}

export default copyBtn