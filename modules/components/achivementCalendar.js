import {Page} from './pages.js';
import {Achivement} from '../services/achivement.js';
import {Constants} from '../services/constants.js'

export class AchivementCalendar extends Page {
	constructor () {
		super('Great Achivement Calendar', 'rotateSlideIn', 'monthlyAchivement', new Achivement())
		
		this.events = [
			this.lightUp.bind(this),
			this.onNextOrPreviousMonth.bind(this),
			this.onMonthOrYearValueChange.bind(this)
		];

		this.classes = [ 'transition-ready', 'height-auto', this.constants.transitions.from[this.transition].exitName ];
	}


	setNewPage () {
		return `<section id="inner-${this._id}" class=" inner card height-screen">
			<div class="card-title text-center">
				<h1>${this._title}</h1>
			</div>
			<div class="row" card-body>
				<div class="col-sm-4">
					${new Constants().text}
				</div>
				<div class="col-sm-8">
					
					<div class="row">
						<div class="col-sm">
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="challenge-addon">Your incredible challenge</span>
								</div>
								<input type="text" class="form-control" id="challenge" aria-describedby="challenge-addon">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										${this.helper.getCalendarDays()}
									</tr>
								</thead>
								<tbody id="monthlyCalendar">
									${this.helper.fillMonthlyCalendar()}
								</tbody>
							</table>
						</div>
					</div>
					<div class="row">
						<div class="col-sm v-center">
							<div class="btn-group btn-group-lg" role="group">
								<button type="button" id="previous" class="jump btn btn-dark">Previous</button>
								<button type="button" id="next" class="jump btn btn-dark">Next</button>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm">
							<div class="form-group">
							    <label for="month">Select Month</label>
							    <select class="form-control monthYearSelect" id="month">
									${this.helper.getCalendarMonths()}
							    </select>
							</div>
						</div>
						<div class="col-sm">
							<div class="form-group">
							    <label for="year">Select Year</label>
							    <select class="form-control monthYearSelect" id="year">
									${this.helper.getCalendarYears()}
							    </select>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
		</section>
		<style>
			${this.constants.getCssTransition(this.transition)}
			.dates { 
				cursor: pointer;
				background-color: #facf5a; 
				transition: all 1s ease-in-out;
			}

			.dates:hover {
				border-bottom: solid #f95959 3px !important;
				transform: scale(1.1);
			}
		</style>`;
	}

	lightUp () {	
		Array.from(document.querySelectorAll('.dates')).forEach(
			element => {
				element.addEventListener('click', e => e.target.classList.toggle('bg-white'))
			}
		)
	}

	onNextOrPreviousMonth () {
		Array.from(document.querySelectorAll('.jump')).forEach( 
			button => button.addEventListener( 'click', this.changeDate.bind(this))
		)
	}

	changeDate (e) {
		let monthInput = document.getElementById('month');
		let yearInput = document.getElementById('year');

		const newMonth = e.target.id == 'next' ? Number(monthInput.value) + 1 : Number(monthInput.value) - 1;
		const newCalendar = this.setNewMonthNewYear(newMonth, Number(yearInput.value), e.target.id);

		monthInput.value = newCalendar.month;
		yearInput.value = newCalendar.year;
		
		document.getElementById('month').dispatchEvent(new Event('input'));
	}

	onMonthOrYearValueChange () {
		Array.from(document.querySelectorAll('.monthYearSelect')).forEach(
			(select) => select.addEventListener( 'input', this.removeAndCreateCalendar.bind(this)) 
		)
	}

	removeAndCreateCalendar (e) {
		let monthInput = Number(document.getElementById('month').value);
		let yearInput = Number(document.getElementById('year').value);

		this.helper.emptyContainer(document.getElementById('monthlyCalendar'));
		document.getElementById('monthlyCalendar').innerHTML = this.helper.fillMonthlyCalendar(monthInput, yearInput);
		this.lightUp('dates');
	}

	setNewMonthNewYear (newMonth, year) {
		if (newMonth == - 1) return {month: 11, year: year - 1};
		if (newMonth == 12) return {month: 0, year: year + 1};

		return {month: newMonth, year: year};
	}
}