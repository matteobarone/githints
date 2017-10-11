import { AppComponent } from "./app.component";
import { HelpComponent } from "./help/help.component";
import './scaffolding.scss';

console.log('%cGit Docs', 'color: blue; font-size: 21px');
console.log('%cwww.matteobarone.it', 'color: blue; font-size: 12px');

const appEl = document.querySelector('app');
const helpComponent = new HelpComponent();

new AppComponent(appEl, helpComponent);