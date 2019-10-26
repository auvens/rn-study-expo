import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20, fontWeight: '100' }}>
          Move fast and be ultralight
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '200' }}>
          Move fast and be light
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 'normal' }}>
          Move fast and be normal
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Move fast and be bold
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '900' }}>
          Move fast and be ultrabold
        </Text>
      </View>
    )
  }
}
