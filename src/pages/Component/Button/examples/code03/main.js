import React from 'react'
import { View, Button, Alert } from 'react-native'

export default class Example extends React.Component {
  onButtonPress = () => {
    Alert.alert('Button has been pressed!')
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          onPress={this.onButtonPress}
          title="This looks great!"
          accessibilityLabel="This sounds great!"
        />
        <Button
          onPress={this.onButtonPress}
          title="Ok!"
          color="#841584"
          accessibilityLabel="Ok, Great!"
        />
      </View>
    )
  }
}
