import React from 'react'
import SliderExample from '../components/SliderExample'

export default class Example extends React.Component {
  render() {
    return (
      <SliderExample
        minimumTrackImage={require('../slider-left.png')}
        maximumTrackImage={require('../slider-right.png')}
      />
    )
  }
}
