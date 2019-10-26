import React from 'react'
import { View, Text } from 'react-native'
import SliderExample from '../components/SliderExample'

export default class SlidingCompleteExample extends React.Component {
  state = {
    slideCompletionValue: 0,
    slideCompletionCount: 0
  }

  render() {
    return (
      <View>
        <SliderExample
          {...this.props}
          onSlidingComplete={value =>
            this.setState({
              slideCompletionValue: value,
              slideCompletionCount: this.state.slideCompletionCount + 1
            })
          }
        />
        <Text>
          Completions: {this.state.slideCompletionCount} Value:{' '}
          {this.state.slideCompletionValue}
        </Text>
      </View>
    )
  }
}
