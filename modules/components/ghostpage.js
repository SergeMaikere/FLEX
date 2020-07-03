import {Page} from './pages.js';

export class GhostPage extends Page {

	constructor () {
		super('Ghost page', 'moveFromLeft', 'myId');

		this.classes = [ 'transition-ready' ]
	}

	setNewPage () {
		return `<div id="ghost-${this._id}" class="row height-screen">
			<div class="col-sm v-center">
				<h2>${this._title}</h2>
			</div>
		</div>
		<style>

			${this.constants.getCssTransition(this.transition)}
			#ghost-${this._id} { background-color: ${this.constants.cssColors}; }

		</style>`;
	}

	setAppropriateTransition () {
		const transition = this.getAttribute('transition') || this.transition;
		return this.helper.hasClass(this, 'vedette') ? transition : this.constants.transitions.from[transition].exitName;
	}

	transitionManager (oldValue, newValue) { 
		this.transition = newValue;
		this.helper.addClass(this, [ this.setAppropriateTransition() ])
	}
}