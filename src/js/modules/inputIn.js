import updateResults from "./updateResults";
import { inputIn } from "./variables";

const inputInFunc = () => {
	inputIn.addEventListener('input', function() {
		updateResults();
	})
}

export default inputInFunc