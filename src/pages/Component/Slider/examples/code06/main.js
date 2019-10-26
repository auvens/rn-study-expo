import React from 'react'
import SliderExample from '../components/SliderExample'

export default class Example extends React.Component {
  render() {
    return (
      <SliderExample
        minimumTrackTintColor={'blue'}
        maximumTrackTintColor={'red'}
        value={0.5}
      />
    )
  }
}
