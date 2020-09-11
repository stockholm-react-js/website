import React, { Component } from 'react';
import { loadableP5 as P5Wrapper } from '../../utils/loadable';

export default class Sketch extends Component {
  render() {
    return <P5Wrapper sketch={this.props.sketch} {...this.props} />
  }
}