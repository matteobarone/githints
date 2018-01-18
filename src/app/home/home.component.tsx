import * as React from 'react';
import './home.scss';

export class HomeComponent extends React.Component {
  dc() {
    console.log('on double click');
  }

  render() {
    return <div onDoubleClick={this.dc} className='home-content'> HOME CONTENT </div>;
  }
}