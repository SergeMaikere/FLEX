 import * as MainPage from '../modules/components/pages.js';

 const page = new MainPage.Page();

 const defaultPage = () => document.getElementsByTagName('main')[0].innerHTML += page.default();

 defaultPage();