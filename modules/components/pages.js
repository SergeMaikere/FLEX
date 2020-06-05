import {Constants} from '../services/constants.js';
import {Utils} from '../services/utils.js';

export class Page extends HTMLElement {


	constructor (title = 'Title', transition = 'none', id = 'id', helper = new Utils()) {

		super();

		this.helper = helper; 

		this.constants = new Constants();

		this._title = title;

		this.transition = transition;

		this._id = id;

		this.events = [];

		this.classes = [];

		this.attributes = [ 	
			{ name:'id', value: this._id } ,
			{ name: 'transition', value: this.transition }
		];

	}

	get _title () { return this.__title; }
	set _title (newValue) { this.__title = this.getAttribute('title') || newValue; }

	get transition () { return this._transition; }
	set transition (newValue) { this._transition = this.getAttribute('transition') || newValue; }

	get _id () { return this.__id; }
	set _id (newValue) { this.__id = this.getAttribute('id') || newValue; }

	get classes () { return this._classes }
	set classes (newValue) { this._classes = newValue }

	get attributes () { return this._attributes }
	set attributes (newValue) { this._attributes = newValue }

	setNewPage () {
		return `<div id="new-${this._id}" class="row height-screen ${this.displayFirstPage()} transition-ready">
			<div class="col-sm v-center">
				<h2>${this._title}</h2>
			</div>
		</div>
		<style>

			${this.constants.getCssTransition(this.transition)}
			#new-${this._id} { background-color: ${this.constants.cssColors}; }

		</style>`;
	}

	static get observedAttributes () { return ['title', 'transition', 'id', 'count', 'links'] }

	attributeChangedCallback (name, oldValue, newValue) {
		if (name == 'title') this._title = newValue;
		if (name == 'transition') this.transition = newValue;
		if (name == 'id') this._id = newValue;
		if (name == 'count') this._count = newValue;
		if (name == 'links') this._links = newValue;

	}


	connectedCallback () {
		this.helper.addAttributes(this, this.attributes);
		this.helper.addClass(this, this.classes);
		this.innerHTML = this.setNewPage();
		this.setEventsListeners();
	}

	setEventsListeners () {
		if (this.events.length == 0) return;
		this.events.forEach( event => event() )
	}

	displayFirstPage () { 
		return this._id == 'page-1' ? 'star ' + this.transition : this.constants.transitions.from[this.transition].exitName 
	}

}




