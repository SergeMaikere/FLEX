 export class Utils {

	emptyContainers (containers) { 
		containers.forEach( container => { if (!container.innerHTML == "") container.innerHTML = "" } ) 
	}

	isContainerEmpty (container) { return container.innerHTML == "" }

	toggleClass (element, className) { element.classList.toggle(className) }

	addClass (element, classNames) { classNames.forEach( className => element.classList.add(className)) }
	
	removeClass (element, classNames) { classNames.forEach( className => element.classList.remove(className)) }

	hasClass (element, className) { return element.classList.contains(className) }

	addAttribute (element, attributes) { 
		attributes.forEach( 
			attribute =>  {
				if (!element.getAttribute(attribute.name)) element.setAttribute(attribute.name, attribute.value );
			}
		) 
	}

	pipe (array_of_f, x) {
		return array_of_f.reduce( (acc, f) =>  f(acc), x )
	}

}