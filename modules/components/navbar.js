import {Page} from './pages.js';

export class Navbar extends Page {

	constructor (id = 'aside') {

		super('My Beautiful navbar', 'none', id);

		this.links = this.addDefaultLinks();
		
	}

	get links () { return this._links }

	set links (arrObj) {
		this._links =  arrObj.reduce(
			(acc, obj) => {
				return acc += 
				`<a id="link-${obj.id}" class="navbar-brand" href="#${obj.anchor}">
			    	<img src="${obj.imgSrc}" alt="${obj.imgAlt}">
				</a>`;
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
				imgAlt: 'Home icon'
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
		return `<aside bg-secondary">
			<div id="${this._id}">
				<nav class="navbar navbar-light v-center bg-fourly">
					${this.links}
				</nav>
			</div>
		</aside>
		
		<style>
			#aside {
				position: fixed;
				top: 0; bottom: 0; left: 0;
			}

			nav { height: 100%; }

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
}