import {Page} from './pages.js';

export class DisplayAnimationCss extends Page {

	constructor () {
		super('Display animation css, none, myId');

	}

	setNewPage () {
		return `<div id="inner-${this.id}" class="inner card">
			<div class="card-title text-center">
				<h3>${this.transitionObj.value}</h3>
			</div>
		</div>
		<div class="card-body row">
			<div class="col-md">
				<div class="card">
					<div class="card-title"><h4>Entering the screen</h4></div>
					<div class="card-body">
						<code>${this.transitionObj.enter}</code>
					</div>
				</div>
			</div>
			<div class="col-md">
				<div class="card">
					<div class="card-title"><h4>Leaving the screen</h4></div>
					<div class="card-body">
						<code>${this.constants.transitions.to[this.transitionObj.exitName].enter}</code>
					</div>
				</div>
			</div>
		</div>`
	}
}