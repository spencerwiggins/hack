// @flow
import React from 'react';
import { Slider } from './';

import type { Props } from './Slider';

export default class SliderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }

    setTimeout(() => this.setState({show: true}), 1000)
  }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log('nextProps', nextProps);
  //   console.log('nextState', nextState);
  //   return true;
  // }

  render() {
    if (this.state.show) {
      return <Slider {...this.props} />
    } else {
      return null;
    }
    // return (
    //   {this.state.show && <Slider {...this.props} />}
    // )
  }
}
