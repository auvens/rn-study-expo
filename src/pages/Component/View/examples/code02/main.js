import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View style={{ borderColor: '#527FE4', borderWidth: 5, padding: 10 }}>
        <Text style={{ fontSize: 11 }}>5px blue border</Text>
      </View>
    )
  }
}
