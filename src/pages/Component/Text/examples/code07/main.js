import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 23 }}>Size 23</Text>
        <Text style={{ fontSize: 8 }}>Size 8</Text>
      </View>
    )
  }
}
