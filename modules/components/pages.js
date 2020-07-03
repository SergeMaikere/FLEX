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
		return `<div class="text-center"><h1></h1></div>`;
	}

	static get observedAttributes () { return ['title', 'transition', 'id'] }

	attributeChangedCallback (name, oldValue, newValue) {
		if (name == 'title') this.titleManager(oldValue, newValue);
		if (name == 'transition') this.transitionManager(oldValue, newValue);
		if (name == 'id') this._id = this.idManager(oldValue, newValue);
	}


	connectedCallback () {
		this.attachShadow({mode: 'open'}).innerHTML = this.constants.cssLinks + this.setNewPage();
		this.setEventsListeners();
		this.setClassAndAttributes();
	}

	setEventsListeners () {
		if (this.events.length == 0) return;
		this.events.forEach( event => event() )
	}

	setClassAndAttributes () {
		this.helper.addAttribute(this, this.attributes);
		this.helper.addClass(this, this.classes);
	}

	transitionManager (oldValue, newValue) { this.transition = newValue; }
	titleManager (oldValue, newValue) { this._title = newValue; }
	idManager (oldValue, newValue) { this._id = newValue; }
}




