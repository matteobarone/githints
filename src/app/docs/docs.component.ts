import {IDocsComponent} from "./docs.interface";
import {template} from "./docs.template";
import {DocsListComponent} from "./docs-list/docs-list.component";

export class DocsComponent implements IDocsComponent{
  private docsListComponent: DocsListComponent;
  constructor() {
    this.docsListComponent = new DocsListComponent();
  }
  render(element: Element) {
    if (!element) {
      const mainEl = document.querySelector('main');
      mainEl.innerHTML = template;
      const docsListEl = document.querySelector('docs-list');
      this.docsListComponent.render(docsListEl);
    }
  }
  
  onDestroy(element: Element) {
    if (element) {
      element.outerHTML = '';
    }
  }
}