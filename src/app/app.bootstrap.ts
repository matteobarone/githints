import { AppComponent } from "./app.component";
import { HelpComponent } from "./help/help.component";
import './scaffolding.scss';
import {DocsComponent} from "./docs/docs.component";
import {AppController} from "./app.controller";

console.log('%cGit Docs', 'color: blue; font-size: 21px');
console.log('%cwww.matteobarone.it', 'color: blue; font-size: 12px');

const appEl = document.querySelector('app');
const appController = new AppController();
const docsComponent = new DocsComponent();
const helpComponent = new HelpComponent();

new AppComponent(
  appEl,
  appController,
  docsComponent,
  helpComponent
);