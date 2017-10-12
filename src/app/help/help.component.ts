import {IHelpComponent} from "./help.interface";
import {template} from "./help.template";

export class HelpComponent implements IHelpComponent {
  render(element: Element) {
    if (!element) {
      const mainEl = document.querySelector('main');
      mainEl.innerHTML = template;
    }
  }
  
  onDestroy(element: Element) {
    if (element) {
      element.outerHTML = '';
    }
  }
}