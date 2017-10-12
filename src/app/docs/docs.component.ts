import {IDocsComponent} from "./docs.interface";
import {template} from "./docs.template";

export class DocsComponent implements IDocsComponent{
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