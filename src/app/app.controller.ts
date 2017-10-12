import {IHelpComponent} from "./help/help.interface";
import {IDocsComponent} from "./docs/docs.interface";

export class AppController{
  public toggleViewHelp(isHelpOpen: boolean, helpComponent: IHelpComponent, docsComponent: IDocsComponent, docsEl: Element, helpEl: Element): boolean {
    if (!isHelpOpen) {
      helpComponent.render(helpEl);
      docsComponent.onDestroy(docsEl);
    } else {
      docsComponent.render(docsEl);
      helpComponent.onDestroy(helpEl);
    }
    return !isHelpOpen;
  }
}