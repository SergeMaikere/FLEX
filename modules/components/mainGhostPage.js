import {Page} from './pages.js';
import {MiniForm} from './miniForm.js';
import {GhostPage} from './ghostpage.js';
import {Constants} from '../services/constants.js';

export class MainGhostPage extends Page {
	constructor () {
		super('Ghost page starter', 'none', 'mainGhostPage');

		this.events = [
			this.onNumberOfPagesSelected.bind(this),
			this.onMiniFormsSubmit.bind(this)
		];

	}

	setNewPage () {
		return `<section id=${this._id} class="card height-auto separator">
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
						<div class="card-body">${this.constants.text}</div>
					</div>
				</div>
			</div>
		</section>

		<section class="row">
			<div id="ghostPages" class="col-sm-11 height-auto transition-container">
			</div>
			<div id="nav-container" class="col-sm-1">
			</div>
		</section>`;
	}

	// Insert the mini-form for pages on number of pages selected by the user
	onNumberOfPagesSelected () {
		document.getElementById('numberOfPages').addEventListener(
			'input', 
			(e) => this.displayMiniPageForm(e.target.value)
		);
	}

	// Manage the displaying of the mini-page-forms
	displayMiniPageForm (num) {
		let count = 0
		let miniFormContainer = document.getElementById('allMyPages');
		let navContainer = document.getElementById('nav-container');
		let pagesContainer = document.getElementById('ghostPages');

		this.helper.emptyContainers([miniFormContainer, navContainer]);
		this.hidePagesContainer(pagesContainer);

		while (num != 0 && count < num) { 
			count++;
			let miniform = document.createElement('s-miniform');
			miniform.setAttribute('count', count);
			miniFormContainer.appendChild(miniform);
		}
	}

	// Creates the pages
	onMiniFormsSubmit () {
		document.getElementById('submitPages').addEventListener('click', this.createGhostPages.bind(this));
	}

	createGhostPages () {
		this.helper.pipe(
			[
				this.isMissingTitle.bind(this),
				this.getMiniFormsValues.bind(this),
				this.setPages.bind(this),
				this.setGhostNavbar.bind(this)
			],
			Array.from(document.querySelectorAll('.mini-form'))
		)
	}

	isMissingTitle (nodeList) {
		return nodeList.every( node => node.querySelector('input').value ) ? nodeList : { error: this.constants.MESSAGE.error }; 
	}


	getMiniFormsValues (nodeList) {
		if (nodeList.error) return nodeList;
		return nodeList.map(
			miniForm => {
				return { 
					title: miniForm.querySelector('input').value, 
					transition: miniForm.querySelector('select').value, 
					id: miniForm.id 
				}
			}
		)
	}


	setPages (arrObj) {
		if (arrObj.error) return alert(arrObj.error);
		let container = document.getElementById('ghostPages');
		this.showPagesContainer(container)
		arrObj.forEach( obj => container.appendChild(this.setPage(obj)))
		return arrObj;
	}	

	setPage (obj) {
		let page = document.createElement('s-ghostpage');

		page.id = obj.id;
		page.setAttribute('transition', obj.transition);
		page.setAttribute('title', obj.title);

		return page;
	}

	setGhostNavbar (arrObj) {
		if (arrObj.error) return alert(arrObj.error);
		let ghostbar = document.createElement('s-ghostnav');
		ghostbar.links = arrObj;
		document.getElementById('nav-container').append(ghostbar);
	}

	showPagesContainer (pagesContainer) { 
		if (!this.helper.hasClass(pagesContainer, 'height-screen')) this.helper.addClass(pagesContainer, ['height-screen']);
		this.helper.emptyContainers([pagesContainer, document.getElementById('nav-container')])
	}

	hidePagesContainer (pagesContainer) {
		if (this.helper.hasClass(pagesContainer, 'height-screen')) this.helper.removeClass(pagesContainer, ['height-screen']);
		this.helper.emptyContainers([pagesContainer])
	} 
}

