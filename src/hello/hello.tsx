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
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(this.state.passed),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(t: number) {
    this.setState({
      time: new Date(),
      passed: t + 1
    });
  }

  render() {
    return <h1>
      Hello from {this.props.title}!<br/>
      {this.state.time.toLocaleTimeString()}<br/>
      Here from {this.state.passed} seconds
    </h1>;
  }
}