import { dropdownButton, dropdownItem, dropdownCurrent } from "./variables";
import updateResults from "./updateResults";

const dropDownButton = () => {
	dropdownButton.addEventListener('click', function () {
		this.classList.toggle('form__dropdown-current_active');

		this.classList.contains('form__dropdown-current_active') ? dropdownItem.classList.add('form__dropdown-item_active') :
		dropdownItem.classList.remove('form__dropdown-item_active');
	})

	document.addEventListener('click', (e) => {
		if (!e.target.classList.contains('js-dropdown') && !e.target.classList.contains('js-dropdown-current')) {
			dropdownButton.classList.remove('form__dropdown-current_active');
			dropdownItem.classList.remove('form__dropdown-item_active');
		}
	})
}

const dropDownItem = () => {
	dropdownItem.addEventListener('click', function () {
		const itemText = this.innerText;
		const dropdownCurrentText = dropdownCurrent.innerText;
	
		dropdownCurrent.innerText = itemText;
		this.innerText = dropdownCurrentText;
		updateResults();
	})
}

export { dropDownButton, dropDownItem }