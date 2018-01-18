import * as React from 'react';
import './app.scss';
import { HomeComponent } from './home/home.component';

export default class AppComponent extends React.Component {
  render() {
    return <HomeComponent />
  }
}