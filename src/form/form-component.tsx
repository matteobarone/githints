import * as React from "react";

export interface FormComponentProps{}
export interface FormComponentState{}

export class FormComponent extends React.Component<FormComponentProps, FormComponentState> {
  constructor(props: FormComponentProps) {
    super(props);
  }

  render() {
    return <form>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name"/>
    </form>
  }
}
