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
		this.helper.addAttribute(this, this.attributes);
		this.helper.addClass(this, this.classes);
		this.attachShadow({mode: 'open'}).innerHTML = this.setCssLinksForSadowDom() + this.setNewPage();
		this.setEventsListeners();
	}

	setEventsListeners () {
		if (this.events.length == 0) return;
		this.events.forEach( event => event() )
	}

	displayFirstPage () { 
		return this._id == 'page-1' ? 'vedette ' + this.transition : this.constants.transitions.from[this.transition].exitName 
	}

	setCssLinksForSadowDom () {
		return `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/css2?family=Rajdhani&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="../../css/index.css">`;
	}

}




