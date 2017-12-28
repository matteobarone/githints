import * as React from "react";

export interface FormComponentProps{}
export interface FormComponentState{
  value: string;
  selectValue: string;
}

export class FormComponent extends React.Component<FormComponentProps, FormComponentState> {
  constructor(props: FormComponentProps) {
    super(props);
    this.state = {value: '', selectValue: 'coconut'};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  private onChange(event: any): void {
    this.setState({value: event.target.value});
  }

  private onSubmit(event: any): void {
    event.preventDefault();
    console.log(this.state.value);
  }

  public render() {
    return <form onSubmit={this.onSubmit}>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" onChange={this.onChange}/>
      <select defaultValue={this.state.selectValue}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <input type="submit" value="submit"/>
    </form>
  }
}
