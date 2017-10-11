import {IHelpComponent} from "./help/help.interface";

export class AppComponent {
  private helpBtn: Element;
  private isViewOpen: boolean;
  
  constructor(private element: Element, private helpComponent: IHelpComponent) {
    this.onInit(element);
  }
  
  public onInit(element: Element): void {
    this.render(element);
    this.afterViewRender();
  }
  
  private afterViewRender(): void {
    this.isViewOpen = false;
    this.helpBtn = document.querySelector('#help-btn');
    this.helpBtn.addEventListener('click', () => this.toggleViewHelp());
  }
  
  private toggleViewHelp(): void {
    !this.isViewOpen
      ? this.helpComponent.render(document.querySelector('main'))
      : this.helpComponent.destroy(document.querySelector('help'));
    this.isViewOpen = !this.isViewOpen;
  }
  
  private render(element: Element): void {
    element.innerHTML =  `
      <header>
        <nav>
            <a id="help-btn" href="#/help">Help</a>
        </nav>
      </header>
      <main></main>
    `;
  }
}