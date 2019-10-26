import React from 'react'
import { Button, Alert } from 'react-native'

export default class Example extends React.Component {
  onButtonPress = () => {
    Alert.alert('Button has been pressed!')
  }
  render() {
    return (
      <Button
        onPress={this.onButtonPress}
        title="Press Me"
        accessibilityLabel="See an informative alert"
      />
    )
  }
}
