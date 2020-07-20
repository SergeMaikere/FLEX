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
				`<div class="nav-item">
					<a id="${obj.id}" class="navbar-link ${obj.hidden ? 'ninja hidden' : 'official-icon'}" href="#${obj.anchor}">
				    	<img 
				    		class="img-fluid"
				    		src="${obj.imgSrc}" 
				    		alt="${obj.imgAlt}" 
				    		anchor="${obj.anchor}" 
				    		data-toggle="tooltip" 
				    		data-placement="right" 
				    		title="${obj.title}"
				    		mother="${obj.hidden ? obj.mother : 'none'}">
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
				imgSrc: '../img/icons/real-estate.svg',
				imgAlt: 'Home icon',
				title: 'Home',
				hidden: false,
				mother: ''
			},
			{
				id: 'link-mainGhostPage',
				anchor: 'mainGhostPage',
				imgSrc: '../img/icons/ghost.svg',
				imgAlt: 'Ghost icon',
				title: 'Main ghost page',
				hidden: false,
				mother: ''
			},
			{
				id: 'link-mainGhostPage-top',
				anchor: 'inner-mainGhostPage',
				imgSrc: '../img/icons/minighost.svg',
				imgAlt: 'Mini ghost icon',
				title: 'Main ghost page top',
				hidden: true,
				mother: 'mainGhostPage'
			},
			{
				id: 'link-ghostPages',
				anchor: 'ghostPages',
				imgSrc: '../img/icons/manyghost.svg',
				imgAlt: 'All Ghost icon',
				title: 'All ghost pages',
				hidden: true,
				mother: 'mainGhostPage'
			},
			{
				id: 'link-display-animation',
				anchor: 'display-animation',
				imgSrc: '../img/icons/coffin.svg',
				imgAlt: 'Coffin icon',
				title: 'Display all the animations css icon',
				hidden: true,
				mother: 'mainGhostPage'
			},
			{
				id: 'link-monthlyAchivement',
				anchor: 'monthlyAchivement',
				imgSrc: '../img/icons/fart.svg',
				imgAlt: 'Fart icon',
				title: 'Monthly Achivement calendar',
				hidden: false,
				mother: ''
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

			.official-icon { margin: 3px 0;  }

			.official-icon img { 
			  	-webkit-transition: .3s ease-in-out;
			  	transition: .3s ease-in-out;
				margin: 6px 0;
				min-width: 50px;  
			}

			.ninja img {
			  	-webkit-transition: .3s ease-in-out;
			  	transition: .3s ease-in-out;
				margin: 6px 0;
				min-width: 30px; 
			}

			.ninja:hover img {
			  -webkit-transform: scale(1.4);
			  transform: scale(1.4);
			}

			.official-icon:hover img {
			  -webkit-transform: rotate(15deg) scale(1.4);
			  transform: rotate(15deg) scale(1.4);
			}	
		</style>`;
	}

	onNavLinkSelected () {
		Array.from(this.shadowRoot.querySelectorAll('.navbar-link')).forEach(
			link => {
				link.addEventListener(
					'click',
					e => {
						// If hidden icon scroll into Main page
						if (this.helper.hasClass(e.target.parentNode, ['ninja'])) return this.pageScrollingManager(e);

						const pageId = e.target.getAttribute('anchor');
	
						// If already on the right page do nothing
						if (this.helper.hasClass(document.getElementById(pageId), 'star')) return;
						
						// If Main page display hidden nav-item
						this.hiddenIconsDisplayManager(pageId);

						// Handle transition
						const transition = this.getPageTransition(pageId);
						this.removeCurrentPage();
						this.insertNewSelectedPage(transition, pageId)
					}
				)
			}
		)
	}

	hiddenIconsDisplayManager (id) {
		const elements = Array.from(this.shadowRoot.querySelectorAll('.navbar-nav .ninja'));
		if (id == 'mainGhostPage') return elements.forEach(element => this.helper.removeClass(element, ['hidden']));
		elements.forEach(element => this.helper.addClass(element, ['hidden']))
	}

	pageScrollingManager (e) {
		const motherId = e.target.getAttribute('mother');
		const anchor = e.target.getAttribute('anchor');
		const element = document.getElementById(motherId).shadowRoot.getElementById(anchor);
		setTimeout( () => element.scrollIntoView(true), 100 );
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