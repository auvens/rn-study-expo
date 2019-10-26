import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  state = { fontWeight: 'bold', fontSize: 15 }

  toggleWeight = () => {
    this.setState({
      fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'
    })
  }

  increaseSize = () => {
    this.setState({
      fontSize: this.state.fontSize + 1
    })
  }

  render() {
    var curStyle = {
      fontWeight: this.state.fontWeight,
      fontSize: this.state.fontSize
    }
    return (
      <View>
        <Text style={curStyle}>
          Tap the controls below to change attributes.
        </Text>
        <Text>
          <Text>
            See how it will even work on{' '}
            <Text style={curStyle}>this nested text</Text>
          </Text>
        </Text>
        <Text
          style={{ backgroundColor: '#ffaaaa', marginTop: 5 }}
          onPress={this.toggleWeight}
        >
          Toggle Weight
        </Text>
        <Text
          style={{ backgroundColor: '#aaaaff', marginTop: 5 }}
          onPress={this.increaseSize}
        >
          Increase Size
        </Text>
      </View>
    )
  }
}
