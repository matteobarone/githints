export class DocsListComponent{
  render(element) {
    const a = [1,2,3];
    a.forEach(el => {
      element.innerHTML += el;
    });
  }
}