import {Page} from './pages.js';

export class Navbar extends Page {

	constructor (id = 'aside') {

		super('My Beautiful navbar', 'none', id);

		this.links = this.addDefaultLinks();

		this.events = [ this.onNavLinkSelected.bind(this) ];

		this.classes = [ 'height-screen' ]
	}

	get links () { return this._links }

	set links (arrObj) {
		this._links =  arrObj.reduce(
			(acc, obj) => {
				return acc += 
				`
				<div class="navbar-item">
					<a id="${obj.id}" class="navbar-brand official-icon" href="#">
				    	<img src="${obj.imgSrc}" alt="${obj.imgAlt}" anchor="${obj.anchor}">
					</a>
				</div>`;
			}, ''
		)
	}

	addLink (obj) { this._links.push(obj) }

	addDefaultLinks () {
		return [
			{
				id: 'link-home',
				anchor: 'hall',
				imgSrc: '../img/icons/icons8-home.svg',
				imgAlt: 'Home icon',
			},
			{
				id: 'link-mainGhostPage',
				anchor: 'mainGhostPage',
				imgSrc: '../img/icons/fear.svg',
				imgAlt: 'Ghost icon'
			},
			{
				id: 'link-monthlyAchivement',
				anchor: 'monthlyAchivement',
				imgSrc: '../img/icons/fart.svg',
				imgAlt: 'Fart icon'
			}
		];
	}

	setNewPage () {
		return `<aside class="height-inherit">
			<div id="inner-${this._id}" class="height-inherit">
				<nav class="navbar navbar-expand-md navbar-light bg-fourly height-inherit">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<div class="navbar-nav v-center">${this.links}</div>
					</div>
				</nav>
			</div>
		</aside>
		
		<style>

			.navbar-brand { margin: 3px 0;  }

			.navbar-brand img { 
				-webkit-transform: rotate(0) scale(1);
			  	transform: rotate(0) scale(1);
			  	-webkit-transition: .3s ease-in-out;
			  	transition: .3s ease-in-out;

				max-width: 50px;  
			}

			.navbar-brand:hover img {
			  -webkit-transform: rotate(15deg) scale(1.4);
			  transform: rotate(15deg) scale(1.4);
			}	
		</style>`;
	}

	onNavLinkSelected () {
		Array.from(this.shadowRoot.querySelectorAll('.official-icon')).forEach(
			link => {
				link.addEventListener(
					'click',
					e => {
						const pageId = e.target.getAttribute('anchor');

						if (this.helper.hasClass(document.getElementById(pageId), 'star')) return;

						const transition = this.getPageTransition(pageId);
						this.removeCurrentPage();
						this.insertNewSelectedPage(transition, pageId)
					}
				)
			}
		)
	}

	getPageTransition (id) { return document.getElementById(id).getAttribute('transition') }

	removeCurrentPage () {
		let currentPage = document.querySelector('.star');
		const transition = currentPage.getAttribute('transition');
		this.helper.removeClass(currentPage, [ 'star', transition ]);
		this.helper.addClass(currentPage, [this.constants.transitions.from[transition].exitName])
	}

	insertNewSelectedPage (transition, id) {
		const interval = this.constants.transitions.from[transition].interval;
		setTimeout(
			() => {
				let newPage = document.getElementById(id);
				this.helper.removeClass(newPage, [this.constants.transitions.from[transition].exitName])
				this.helper.addClass(newPage, ['star', transition])
			},
			interval
		)
	}
}