
import {Page} from './pages.js';

export class MiniForm extends Page{

	constructor(count) {
		super('MiniForm', 'none');

		this.count = this.getAttribute('count');

		this.attributes = [ { name: 'id', value: `page-${this.getAttribute('count')}` } ]		
	}

	get count () { return this._count }
	set count (newValue) { this._count = newValue }

	setNewPage () {
		return `<div class="card mini-form">
			<div class="card-body">
				<div class="form-group">
					<label for="pageTitle-${this._count}">Title of page ${this._count}</label>
					<input type="text" class="form-control" id="pageTitle-${this._count}" aria-describedby="pageTitleHelp-${this._count}">
					<small id="pageTitleHelp-${this._count}" class="form-text text-muted">Give a title to your page</small>
				</div>
				<div class="form-group">
					<label for="pageTransition">Page transition</label>
					<select class="custom-select">
						${this.displayOptions()}
					</select>
					<small id="pageTitleHelp" class="form-text text-muted">Select your page's transition</small>
				</div>
			</div>
		</div>
		<style>
			.mini-form {
				max-width: 300px;
				display: inline-block;
			}
		</style>`;
	}

	displayOptions () {
		const transitions = this.constants.transitions.from;

		return Object.keys(transitions).reduce( 
			(acc, transition) => acc +=`<option value="${transition}">${transitions[transition].value}</option>`, ''
		)
	}
}