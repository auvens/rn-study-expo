import React from 'react'
import { Button, Alert } from 'react-native'

export default class Example extends React.Component {
  onButtonPress = () => {
    Alert.alert('Button has been pressed!')
  }
  render() {
    return (
      <Button
        disabled
        onPress={this.onButtonPress}
        title="I Am Disabled"
        accessibilityLabel="See an informative alert"
      />
    )
  }
}
