import {Page} from './pages.js';

export class GhostPage extends Page {

	constructor () {
		super('Ghost page', 'none', 'myId');

		this.classes = [ 'transition-ready', this.displayFirstPage() ]
	}

	setNewPage () {
		return `<div id="ghost-${this._id}" class="row height-screen">
			<div class="col-sm v-center">
				<h2>${this._title}</h2>
			</div>
		</div>
		<style>

			${this.constants.getCssTransition(this.transition)}
			#new-${this._id} { background-color: ${this.constants.cssColors}; }

		</style>`;
	}

	static get observedAttributes () { return ['title', 'transition', 'id'] }

	attributeChangedCallback (name, oldValue, newValue) {
		if (name == 'title') this._title = newValue;
		if (name == 'transition') this.transition = newValue;
		if (name == 'id') this._id = newValue;

		console.log(this.transition)
		console.log(this._id)
	}

	displayFirstPage () { 
		console.log(this.transition)
		console.log(this._id)
		return this._id == 'new-page-1' ? 'vedette ' + this.transition : this.constants.transitions.from[this.transition].exitName 
	}
}