import {DefaultPage} from '../modules/components/defaultPage.js';
import {MainGhostPage} from '../modules/components/mainGhostPage.js';
import {AchivementCalendar} from '../modules/components/achivementCalendar.js';
import {Footer} from '../modules/components/footer.js';
import {Navbar} from '../modules/components/navbar.js';
import {GhostPage} from '../modules/components/ghostpage.js';
import {GhostNav} from '../modules/components/ghostNav.js';
import {MiniForm} from '../modules/components/miniForm.js';


customElements.define(`s-navbar`, Navbar);
customElements.define(`s-defaultpage`, DefaultPage);
customElements.define(`s-mainghostpage`, MainGhostPage);
customElements.define(`s-achivementcalendar`, AchivementCalendar);
customElements.define(`s-footer`, Footer);
customElements.define(`s-ghostpage`, GhostPage);
customElements.define(`s-ghostnav`, GhostNav);
customElements.define(`s-miniform`, MiniForm);

const pages = [
	{ container: '#side', content: document.createElement('s-navbar')},
	{ container: '#main', content: document.createElement('s-defaultpage')},
	{ container: '#main', content: document.createElement('s-mainghostpage')},
	{ container: '#main', content: document.createElement('s-achivementcalendar')}
	// { container: '#main', content: document.createElement('s-footer') }
]

pages.forEach( page => document.querySelector(page.container).appendChild(page.content) )




	
