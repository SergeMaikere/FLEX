import {Page} from './pages.js';

export class DefaultPage extends Page {

	constructor () {
		super('Banner Page', 'none', 'hall')
		
	}

	setNewPage () {
		return `<header class="row separator">
			<div id="${this._id}" class="col-sm text-light v-center">
				<h1>Serge Maïkere</h1>
				<q>
					<i>C'est pas l'hum qui fait le code, c'est le code qui fait l'hum</i></q><br>
				<q><i>Tadaaan</i></q>
			</div>
		</header>
		<style>
			#hall {
				height: 100vh;
				background-image:  url('../img/background/ayesh-rathnayake-iscVGfKhwrA-unsplash.jpg');
				background-position: center center;
				background-size: cover;
			}
		</style>`;
	}
}