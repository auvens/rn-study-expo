import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ letterSpacing: 0 }}>letterSpacing = 0</Text>
        <Text style={{ letterSpacing: 2, marginTop: 5 }}>
          letterSpacing = 2
        </Text>
        <Text style={{ letterSpacing: 9, marginTop: 5 }}>
          letterSpacing = 9
        </Text>
        <Text style={{ letterSpacing: -1, marginTop: 5 }}>
          letterSpacing = -1
        </Text>
      </View>
    )
  }
}
