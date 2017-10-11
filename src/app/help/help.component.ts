import {IHelpComponent} from "./help.interface";
import './help.scss';

export class HelpComponent implements IHelpComponent {
  render(element: Element) {
    if (!document.querySelector('help')) {
      element.innerHTML = `
        <help>Ciao sono la Help page</help>
      `;
    }
  }
  
  onDestroy(element: Element) {
    if (element) {
      element.outerHTML = '';
    }
  }
}