import React from 'react'
import { TouchableWithoutFeedback, View, Text } from 'react-native'

export default class Example extends React.Component {
  state = {
    showBorder: true
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._handlePress}>
        <View>
          <View
            style={{
              borderWidth: 1,
              borderStyle: this.state.showBorder ? 'dashed' : null,
              padding: 5
            }}
          >
            <Text style={{ fontSize: 11 }}>Dashed border style</Text>
          </View>
          <View
            style={{
              marginTop: 5,
              borderWidth: 1,
              borderRadius: 5,
              borderStyle: this.state.showBorder ? 'dotted' : null,
              padding: 5
            }}
          >
            <Text style={{ fontSize: 11 }}>Dotted border style</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _handlePress = () => {
    this.setState({ showBorder: !this.state.showBorder })
  }
}
