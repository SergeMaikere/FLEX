import {Page} from './pages.js';
import {Constants} from '../services/constants.js'

export class AchivementCalendar extends Page {
	constructor () {
		super('Great Achivement Calendar', 'rotateSlideIn', 'monthlyAchivement')
		
		this.start = 2000;
		this.end = 2050;

		this.date = 1;

		this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		this.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

		this.today = new Date();
		this.currentMonth = this.today.getMonth();
		this.currentYear = this.today.getFullYear();
		this.starDates = JSON.parse(localStorage.getItem('starDates')) || { goal: "", dates: []};
		this.proxyStarDates = new Proxy(this.starDates, this.updateLocalStorage())

		this.events = [
			this.saveChallenge.bind(this),
			this.onDateClick.bind(this),
			this.onNextOrPreviousMonth.bind(this),
			this.onMonthOrYearValueChange.bind(this)
		];

		this.classes = [ 'transition-ready', 'height-auto', this.constants.transitions.from[this.transition].exitName ];
	}

	setNewPage () {
		return `<section id="inner-${this._id}" class=" inner card">
			<div class="card-title text-center">
				<h1>${this._title}</h1>
			</div>
			<div class="row" card-body>
				<div class="col-md-4 v-pad">
					${new Constants().text}
				</div>
				<div class="col-md-8 v-pad">
					
					<div class="row">
						<div class="col-sm">
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="challenge-addon">Your incredible challenge</span>
								</div>
								<input type="text" class="form-control" id="challenge" aria-describedby="challenge-addon" value="${this.proxyStarDates.goal}">
								<div class="input-group-append">
									<button class="input-group-text btn btn-primary" id="save-challenge">Save</button>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										${this.getCalendarDays()}
									</tr>
								</thead>
								<tbody id="monthlyCalendar">
									${this.fillMonthlyCalendar()}
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
									${this.getCalendarMonths()}
							    </select>
							</div>
						</div>
						<div class="col-sm">
							<div class="form-group">
							    <label for="year">Select Year</label>
							    <select class="form-control monthYearSelect" id="year">
									${this.getCalendarYears()}
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

	// RENDERING

	getCalendarDays () {
		return this.days.reduce( (acc, day) => acc += `<th>${day}</th>`, "" );
	}
 
	getCalendarMonths () {
		return this.months.reduce( 
			(acc, month, i) => acc += `<option value="${i}" ${(i == this.currentMonth ? "selected" : "")}>${month}</option>`,
			"" 
		)
	}

	getCalendarYears () {
		return [...Array(this.end - this.start + 1).keys()].reduce( 
			(acc, i) => acc += `<option value="${this.start + i}" ${(this.start + i == this.currentYear ? "selected" : "")}>${this.start + i}</option>`,
			"" 
		)
	}

	firstDay (month, year) {
		return (new Date(year, month)).getDay();
	}

	// From Itin Patel -> http://iamnitinpatel.com/projects/calendar/ Quite clever
	daysInMonth (month, year) {
		return 32 - new Date(year, month, 32).getDate();
	}

	fillMonthlyCalendar (month = this.currentMonth, year = this.currentYear) {
		this.date = 1;
		return [...Array(5).keys()].reduce(
			(acc, row) => {
				return acc += `<tr>${this.setCalendarDates(month, year, row)}</tr>`;
				
			}, ""
		)
	}

	setCalendarDates (month, year, row) {
		return this.days.reduce(
			(acc, day, i) => {
				const firstDay = this.firstDay(month, year);

				if ((this.date < firstDay && i + 1 < firstDay && row == 0) || this.date > this.daysInMonth(month, year)) return acc += `<td class="bg-white"></td>`;

				const cell = `<td class="dates ${this.setBgColor(year, month, this.date)}">${this.date}</td>`;
				this.date++;
				return acc += cell;
			}, ""
		)
	}

	setBgColor (year, month, day) {
		const newDay = 
		{ 
			year: year.toString(), 
			month: month.toString(), 
			day: day.toString() 
		}

		return this.starDates.dates.some( date => this.helper.isEquivalent(date, newDay) ) ? '' : 'bg-white';
	}

	// EVENTS

	saveChallenge () { 
		this.shadowRoot.getElementById('save-challenge').addEventListener(
			'click',
			e => {
				if (!this.shadowRoot.getElementById('challenge').value) return;
				this.proxyStarDates.goal = this.shadowRoot.getElementById('challenge').value;
			}
		)
	}

	onDateClick () {	
		Array.from(this.shadowRoot.querySelectorAll('.dates')).forEach(
			element => {
				element.addEventListener(
					'click',
					e => {
						this.helper.pipe(
							[ 
								this.lightUp.bind(this), 
								this.updateStarDate.bind(this),
							],
							e.target
						)
					}
				)
			}
		)
	}

	lightUp (element) { 
		this.helper.toggleClass(element, 'bg-white');
		return element;
	}

	updateStarDate (element) {

		this.proxyStarDates.dates = 
		{
			year: this.shadowRoot.getElementById('year').value,
			month: this.shadowRoot.getElementById('month').value,
			day: element.innerText,
			action: this.helper.hasClass(element, 'bg-white') ? 'remove' : 'add'
		}		
	}

	updateLocalStorage () {
		return {
			set: (target, property, value) => {

				if (property == 'goal') target[property] = value;

				if (property == 'dates' && value.action == 'add') {
					delete value.action;
					target[property].push(value);
				}

				if (property == 'dates' && value.action == 'remove') { 
					delete value.action;
					target[property] = target[property].filter( date => !this.helper.isEquivalent(date, value));
				}

				localStorage.starDates = JSON.stringify(target);
				return true;
			}
		}
	}

	onNextOrPreviousMonth () {
		Array.from(this.shadowRoot.querySelectorAll('.jump')).forEach( 
			button => button.addEventListener( 'click', this.changeDate.bind(this))
		)
	}

	changeDate (e) {
		let monthInput = this.shadowRoot.getElementById('month');
		let yearInput = this.shadowRoot.getElementById('year');

		const newMonth = e.target.id == 'next' ? Number(monthInput.value) + 1 : Number(monthInput.value) - 1;
		const newCalendar = this.setNewMonthNewYear(newMonth, Number(yearInput.value), e.target.id);

		monthInput.value = newCalendar.month;
		yearInput.value = newCalendar.year;
		
		this.shadowRoot.getElementById('month').dispatchEvent(new Event('input'));
	}

	onMonthOrYearValueChange () {
		Array.from(this.shadowRoot.querySelectorAll('.monthYearSelect')).forEach(
			(select) => select.addEventListener( 'input', this.removeAndCreateCalendar.bind(this)) 
		)
	}

	removeAndCreateCalendar (e) {
		let monthInput = Number(this.shadowRoot.getElementById('month').value);
		let yearInput = Number(this.shadowRoot.getElementById('year').value);

		this.helper.emptyContainers([this.shadowRoot.getElementById('monthlyCalendar')]);
		this.shadowRoot.getElementById('monthlyCalendar').innerHTML = this.fillMonthlyCalendar(monthInput, yearInput);
		this.onDateClick();
	}

	setNewMonthNewYear (newMonth, year) {
		if (newMonth == - 1) return {month: 11, year: year - 1};
		if (newMonth == 12) return {month: 0, year: year + 1};

		return {month: newMonth, year: year};
	}
}