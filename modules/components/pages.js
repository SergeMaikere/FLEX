
export class Page {

	constructor() {
		this.body = 
		`<div class="container text-center page" id="default">
			<div class="row">
				<div class="col-sm-8">
					<div class="card">
						<div class="card-body">
							<h2>Because why not</h2>
							<p>TEXT</p>
						</div>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="card">
						<div class="card-body">
							<h2>Because why not</h2>
							<p>TEXT</p>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	}

	default () { return this.body }

}

