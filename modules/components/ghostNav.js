import {Navbar} from './navbar.js';

export class GhostNav extends Navbar {
	constructor () {
		super('ghostNavbar');

		this.events = [ this.onNavLinkSelected.bind(this) ]

	}

	get links () { return this._links }

	set links (arrObj) {
		if (arrObj.length == 0) this._links = arrObj;

		this._links =  arrObj.reduce(
			(acc, obj) => {
				return acc += 
				`<a id="link-${obj.id}" class="navbar-brand homemade-icon" href="#ghostPages">
			    	<span class="badge bg-secondary" page="${obj.id}" transition="${obj.transition}">${this.setHomemadeIcon(obj.title)}</span>
				</a>`;
			}, ''
		)
	}

	addDefaultLinks () { return []; }

	setHomemadeIcon (title) { return title.toUpperCase().substring(0, 2) }

	setNewPage () {
		return `<aside bg-secondary">
			<div id="inner-${this._id}">
				<nav class="navbar navbar-light bg-fourly v-center height-screen">
					${this.links}
				</nav>
			</div>
		</aside>
		
		<style>
			
			.navbar { margin: 0; padding: 0; }

			.navbar-brand { margin: 0 6px;  }

			.navbar-brand span { 
				-webkit-transform: scale(1);
			  	transform: scale(1);
			  	-webkit-transition: .3s ease-in-out;
			  	transition: .3s ease-in-out;

			}

			.navbar-brand:hover span {
			  -webkit-transform: scale(1.4);
			  transform: scale(1.4);
			}	
		</style>`;
	}

	onNavLinkSelected () {
		Array.from(this.shadowRoot.querySelectorAll('.homemade-icon')).forEach(
			link => {
				link.addEventListener(
					'click',
					e => {
						const pageId = 'new-' + e.target.getAttribute('page');

						if (this.helper.hasClass(document.getElementById('mainGhostPage').shadowRoot.getElementById(pageId), 'vedette')) return;

						const transition = e.target.getAttribute('transition');
						this.removeCurrentPage();
						this.insertNewSelectedPage(transition, pageId, 0)
					}
				)
			}
		)
	}

	removeCurrentPage () {
		let currentPage = document.getElementById('mainGhostPage').shadowRoot.querySelector('.vedette');
		const transition = currentPage.getAttribute('transition');
		this.helper.removeClass(currentPage, [ 'vedette', transition ]);
		this.helper.addClass(currentPage, [this.constants.transitions.from[transition].exitName])
	}

	insertNewSelectedPage (transition, id, timeout) {

		setTimeout(
			() => {
				let newPage = document.getElementById('mainGhostPage').shadowRoot.getElementById(id);
				this.helper.removeClass(newPage, [this.constants.transitions.from[transition].exitName])
				this.helper.addClass(newPage, ['vedette', transition])
			},
			timeout
		)
	}
}