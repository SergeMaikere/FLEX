import {Navbar} from './navbar.js';

export class GhostNav extends Navbar {
	constructor () {
		super('ghostNavbar');

		this.events = [ this.onNavLinkSelected.bind(this), this.onDisplayAnimationClicked.bind(this) ]

	}

	get links () { return this._links }

	set links (arrObj) {
		if (arrObj.length == 0) this._links = arrObj;

		this._links =  arrObj.reduce(
			(acc, obj) => {
				return acc += 
				`<a id="link-${obj.id}" class="homemade-icon" href="#ghostPages">
			    	<span 
			    		class="badge bg-secondary white" 
			    		page="${obj.id}" 
			    		transition="${obj.transition}" 
			    		data-toggle="tooltip" 
			    		data-placement="right" 
			    		title="${obj.title}">${this.setHomemadeIcon(obj.title)}</span>
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
					<a id="save-transitions" href="#save-animation">
				    	<span class="fa fa-paw thertiarily" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Get the animations"></span>
					</a>
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
			  -webkit-transform: rotate(-15deg) scale(1.4);
			  transform: rotate(-15deg) scale(1.4);
			}	
			
			.homemade-icon { padding: 10px; }

			#save-transitions { font-size: 1.5em; }

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
						this.insertNewSelectedPage(transition, pageId);
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

	insertNewSelectedPage (transition, id) {
		const interval = this.constants.transitions.from[transition].interval;
		setTimeout(
			() => {
				let newPage = document.getElementById('mainGhostPage').shadowRoot.getElementById(id);
				this.helper.removeClass(newPage, [this.constants.transitions.from[transition].exitName]);
				this.helper.addClass(newPage, ['vedette', transition]);
			},
			interval
		)
	}

	onDisplayAnimationClicked () {
		this.shadowRoot.getElementById('save-transitions').addEventListener(
			'click',
			(e) => {
				let container = document.getElementById('mainGhostPage').shadowRoot.getElementById('display-animation');
				
				if (!this.helper.isContainerEmpty(container)) this.helper.emptyContainers([container])

				Array.from(this.shadowRoot.querySelectorAll('.homemade-icon span')).forEach(
					link => {
						let animation = document.createElement('s-animation');
						animation.setAttribute('transition', link.getAttribute('transition'));
						animation.setAttribute('title', link.getAttribute('title'));
						animation.id = 'anim-' + link.getAttribute('page');
						document.querySelector('s-mainghostpage').shadowRoot.getElementById('display-animation').append(animation);
					}
				)
			}
		)
	}
}