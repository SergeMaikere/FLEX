
import {Page} from './pages.js';

export class MiniForm extends Page{

	constructor() {
		super('MiniForm', 'none', 'test');

		this.count = this.getAttribute('count');

	}

	get _id () { return this.__id }
	set _id (newValue) { this.__id = this.id || newValue }

	get count () { return this._count }
	set count (newValue) { this._count = newValue }

	setNewPage () {
		return `<div class="card mini-form">
			<div class="card-body">
				<div class="form-group">
					<label for="pageTitle-${this.count}">Title of page ${this.count}</label>
					<input 
						type="text" 
						class="form-control" 
						id="pageTitle-${this.count}" 
						aria-describedby="pageTitleHelp-${this.count}"
						placeholder="Page ${this.count}">
					<small id="pageTitleHelp-${this.count}" class="form-text text-muted">Give a title to your page</small>
				</div>
				<div class="form-group">
					<label for="pageTransition">Page transition</label>
					<select class="custom-select">
						${this.displayOptions()}
					</select>
					<small id="pageTitleHelp" class="form-text text-muted">Select your page's transition</small>
				</div>
			</div>
		</div>
		<style>
			.mini-form {
				max-width: 300px;
				display: inline-block;
			}
		</style>`;
	}

	static get observedAttributes () { return ['count'] }

	attributeChangedCallback (name, oldValue, newValue) { if (name == 'count') this._count = newValue }

	displayOptions () {
		const transitions = this.constants.transitions.from;

		const arrTransitions = Object.keys(transitions);
		arrTransitions.shift();
		
		const randomTransition = this.helper.getRandom(arrTransitions);

		return arrTransitions.reduce( 
			(acc, transition) => acc +=`<option value="${transition}" ${ transition == randomTransition ? "selected" :  "" }>${transitions[transition].value}</option>`, ''
		)
	}

}