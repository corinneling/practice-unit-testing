function setInitialAriaValue(elements, aria, ariaValue) {
	elements.forEach((element) => {
		if(element.outerHTML.includes(aria)) {
			element.setAttribute(`${aria}`, `${ariaValue}`);
		} else {
			// console.log('Error: no matching aria value');
			// TO DO: add error logger here
		}
	});
}

export default setInitialAriaValue;