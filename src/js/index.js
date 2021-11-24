import buildString from './modules/buildString';
import { dropDownButton, dropDownItem } from './modules/dropDown';
import radioInput from './modules/radioInputs';
import copyBtn from './modules/copyBtn';
import inputInFunc from './modules/inputIn';
import formInit from './modules/form';
import scrolling from './modules/scroll';

document.addEventListener('DOMContentLoaded', () => {
	buildString();
	dropDownButton();
	dropDownItem();
	radioInput();
	copyBtn();
	inputInFunc()
	formInit();
	scrolling();
})