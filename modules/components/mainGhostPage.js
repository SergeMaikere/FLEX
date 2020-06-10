import {Page} from './pages.js';
import {MiniForm} from './miniForm.js';
import {GhostPage} from './ghostpage.js';
import {Constants} from '../services/constants.js';

export class MainGhostPage extends Page {
	constructor () {
		super('Ghost page starter', 'rotateSlideIn', 'mainGhostPage');

		this.events = [
			this.onNumberOfPagesSelected.bind(this),
			this.onMiniFormsSubmit.bind(this)
		];

		this.classes = [ 'transition-ready', 'height-screen', this.constants.transitions.from[this.transition].exitName ];

	}

	setNewPage () {
		return `<section id="inner-${this._id}" class="inner card height-screen">
			<div class="card-title text-center">
				<h1>${this._title}</h1>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-sm-8">
						<form>
							<div class="form-group">
								<label for="numberOfPages">Number of Pages</label>
								<input type="number" class="form-control" id="numberOfPages" aria-describedby="numberPageHelp" placeholder="1">
								<small id="numberPageHelp" class="form-text text-muted">Choose the number of pages.</small>
							</div>
							<div id="allMyPages"></div>
							<button id="submitPages" type="button" class="btn btn-dark">Submit</button>
						</form>
					</div>
					<div class="col-sm-4">
						${this.constants.text}
					</div>
				</div>
			</div>
		</section>

		<section class="row">
			<div id="ghostPages" class="col-sm-11 height-auto transition-container">
			</div>
			<div id="nav-container" class="col-sm-1">
			</div>
		</section>
		<style>
			${this.constants.getCssTransition(this.transition)}
		</style>`;
	}

	// Insert the mini-form for pages on number of pages selected by the user
	onNumberOfPagesSelected () {
		this.shadowRoot.getElementById('numberOfPages').addEventListener(
			'input', 
			(e) => this.displayMiniPageForm(e.target.value)
		);
	}

	// Manage the displaying of the mini-page-forms
	displayMiniPageForm (num) {
		let count = 0
		let miniFormContainer = this.shadowRoot.getElementById('allMyPages');
		let navContainer = this.shadowRoot.getElementById('nav-container');
		let pagesContainer = this.shadowRoot.getElementById('ghostPages');

		this.helper.emptyContainers([miniFormContainer, navContainer]);
		this.hidePagesContainer(pagesContainer);

		while (num != 0 && count < num) { 
			count++;
			let miniform = document.createElement('s-miniform');
			miniform.setAttribute('count', count);
			miniform.id = 'page-' + count;
			miniFormContainer.appendChild(miniform);
		}
	}

	// Creates the pages
	onMiniFormsSubmit () {
		this.shadowRoot.getElementById('submitPages').addEventListener('click', this.createGhostPages.bind(this));
	}

	createGhostPages () {
		this.helper.pipe(
			[
				this.isMissingTitle.bind(this),
				this.getMiniFormsValues.bind(this),
				this.setPages.bind(this),
				this.setGhostNavbar.bind(this)
			],
			Array.from(this.shadowRoot.querySelectorAll('s-miniform'))
		)
	}

	isMissingTitle (nodeList) {
		return nodeList.every( node => node.shadowRoot.querySelector('input').value ) ? nodeList : { error: this.constants.MESSAGE.error }; 
	}


	getMiniFormsValues (nodeList) {
		if (nodeList.error) return nodeList;
		return nodeList.map(
			miniForm => {
				return { 
					title: miniForm.shadowRoot.querySelector('input').value, 
					transition: miniForm.shadowRoot.querySelector('select').value, 
					id: miniForm.id 
				}
			}
		)
	}


	setPages (arrObj) {
		if (arrObj.error) return alert(arrObj.error);
		let container = this.shadowRoot.getElementById('ghostPages');
		this.showPagesContainer(container)
		arrObj.forEach( obj => container.appendChild(this.setPage(obj)))
		return arrObj;
	}	

	setPage (obj) {
		let page = document.createElement('s-ghostpage');
		page.id = 'new-' + obj.id;
		page.setAttribute('transition', obj.transition);
		page.setAttribute('title', obj.title);

		return page;
	}

	setGhostNavbar (arrObj) {
		if (arrObj.error) return alert(arrObj.error);
		let ghostbar = document.createElement('s-ghostnav');
		ghostbar.links = arrObj;
		this.shadowRoot.getElementById('nav-container').append(ghostbar);
	}

	showPagesContainer (pagesContainer) { 
		if (!this.helper.hasClass(pagesContainer, 'height-screen')) this.helper.addClass(pagesContainer, ['height-screen']);
		this.helper.emptyContainers([pagesContainer, this.shadowRoot.getElementById('nav-container')])
	}

	hidePagesContainer (pagesContainer) {
		if (this.helper.hasClass(pagesContainer, 'height-screen')) this.helper.removeClass(pagesContainer, ['height-screen']);
		this.helper.emptyContainers([pagesContainer])
	} 
}

