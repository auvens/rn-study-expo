import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontWeight: 'bold' }}>Move fast and be bold</Text>
        <Text style={{ fontWeight: 'normal' }}>Move fast and be bold</Text>
      </View>
    )
  }
}
