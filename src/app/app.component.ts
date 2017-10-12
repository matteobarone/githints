import {IHelpComponent} from "./help/help.interface";
import {template} from "./app.template";
import {IDocsComponent} from "./docs/docs.interface";
import {AppController} from "./app.controller";

export class AppComponent {
  private helpBtn: Element;
  private helpEl: Element;
  private docsEl: Element;
  private isHelpOpen: boolean;
  
  constructor(
    private element: Element,
    private appController: AppController,
    private docsComponent: IDocsComponent,
    private helpComponent: IHelpComponent
  ) {
    this.onInit(element);
  }
  
  private onInit(element: Element): void {
    this.helpEl = document.querySelector('help');
    this.docsEl = document.querySelector('docs');
    this.render(element);
    this.docsComponent.render(this.docsEl);
    this.onAfterViewRender();
  }
  
  private onAfterViewRender(): void {
    this.isHelpOpen = false;
    this.helpBtn = document.querySelector('#help-btn');
    this.helpBtn.addEventListener('click', () => {
      this.isHelpOpen = this.appController.toggleViewHelp(this.isHelpOpen, this.helpComponent, this.docsComponent, this.docsEl, this.helpEl);
    });
  }
  
  private render(element: Element): void {
    element.innerHTML = template;
  }
}