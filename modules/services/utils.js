 export class Utils {

	emptyContainers (containers) { 
		containers.forEach( container => { if (!container.innerHTML == "") container.innerHTML = "" } ) 
	}

	isContainerEmpty (container) { return container.innerHTML == "" }

	toggleClass (element, className) { element.classList.toggle(className) }

	addClass (element, classNames) { 
		classNames.forEach( 
			className => {
				if (!this.hasClass(element, className)) element.classList.add(className)
			}
		) 
	}
	
	removeClass (element, classNames) { 
		classNames.forEach( 
			className => {
				if (this.hasClass(element, className)) element.classList.remove(className)
			}
		) 
	}

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

	getRandom (arr) { return arr[ Math.floor( Math.random() * arr.length ) ] }

	isEquivalent (objA, objB) {
		const objAProperties = Object.getOwnPropertyNames(objA);
		const objBProperties = Object.getOwnPropertyNames(objB);

		if (objAProperties.length !== objBProperties.length) return false;

		return objAProperties.every( property => objA[property] === objB[property]);
	}

}