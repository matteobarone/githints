import * as React from "react";
import './hello.scss';

export interface HelloProps {
  title: string;
}

export interface HelloState {
  time: any;
  passed: number;
}

export class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps, private timerID: any) {
    super(props);
    this.state = {time: new Date(), passed: 0};
    this.reset = this.reset.bind(this);
  }

  public componentDidMount(): void {
    this.timerID = setInterval(
      () => this.tick(this.state.passed),
      1000
    );
  }

  public componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  public render() {
    return <h1>
      Hello from {this.props.title}!<br/>
      {this.state.time.toLocaleTimeString()}<br/>
      Here from {this.state.passed} seconds<br/>
      <span onClick={this.reset}>reset</span>
    </h1>;
  }

  private tick(t: number): void {
    this.setState({
      time: new Date(),
      passed: t + 1
    });
  }

  private reset(): void {
    this.setState({
      passed: 0
    });
  }
}