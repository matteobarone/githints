import * as React from "react";
import {Hello} from "../hello/hello";
import {FormComponent} from "../form/form-component";

export interface MainComponentProps {
}

export interface MainComponentState {
}

export class MainComponent extends React.Component<MainComponentProps, MainComponentState> {
  constructor(props: MainComponentProps) {
    super(props);
  }

  render() {
    return <div>
      <Hello title="React!"/>
      <FormComponent/>
    </div>
  }
}