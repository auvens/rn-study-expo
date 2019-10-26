import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ color: 'red' }}>Red color</Text>
        <Text style={{ color: 'blue' }}>Blue color</Text>
      </View>
    )
  }
}
