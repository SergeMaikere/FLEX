import {Page} from './pages.js';

export class Footer extends Page {
	constructor () { super('My footer', 'none', 'footer') }

	setNewPage () {
		return `<footer class="row bg-secondary text-light">
			<div class="col-sm-1"></div>
			<div class="col-sm-4">
				<div>Icons made by 
					<a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
				</div>
				<div>
					Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
				</div>
			</div>
			<div class="col-sm-4"></div>
			<div class="col-sm-3"></div>
		</footer>
		<style></style>`;
	}
}
