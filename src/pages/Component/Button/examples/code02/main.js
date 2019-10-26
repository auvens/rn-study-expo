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
        title="Press Purple"
        color="#841584"
        accessibilityLabel="Learn more about purple"
      />
    );
  }
}
