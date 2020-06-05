import {Page} from './pages.js';

export class DefaultPage extends Page {

	constructor () {
		super('Banner Page', 'rotateSlideIn', 'hall');

		this.classes = [ 'transition-ready', 'star', 'height-screen', this.transition];
		
	}

	setNewPage () {
		return `<header class="row inner">
			<div id="inner-${this._id}" class="col-sm text-light v-center height-screen">
				<h1>Serge Maïkere</h1>
				<q>
					<i>C'est pas l'hum qui fait le code, c'est le code qui fait l'hum</i></q><br>
				<q><i>Tadaaan</i></q>
			</div>
		</header>
		<style>

			${this.constants.getCssTransition(this.transition)}

			#inner-hall {
				background-image:  url('../img/background/ayesh-rathnayake-iscVGfKhwrA-unsplash.jpg');
				background-position: center center;
				background-size: cover;
			}
		</style>`;
	}

}