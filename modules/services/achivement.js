import {Utils} from './utils.js';

export class Achivement extends Utils {
	constructor () {
		super();

		this.start = 2000;
		this.end = 2050;

		this.date = 1;

		this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		this.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

		this.today = new Date();
		this.currentMonth = this.today.getMonth();
		this.currentYear = this.today.getFullYear();

	}

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

	// Quite clever
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

				const cell = `<td class="dates bg-white">${this.date}</td>`;
				this.date++;
				return acc += cell;
			}, ""
		)
	}
}
