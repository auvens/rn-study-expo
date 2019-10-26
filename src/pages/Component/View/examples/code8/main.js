import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <View style={{ opacity: 0 }}>
          <Text>Opacity 0</Text>
        </View>
        <View style={{ opacity: 0.1 }}>
          <Text>Opacity 0.1</Text>
        </View>
        <View style={{ opacity: 0.3 }}>
          <Text>Opacity 0.3</Text>
        </View>
        <View style={{ opacity: 0.5 }}>
          <Text>Opacity 0.5</Text>
        </View>
        <View style={{ opacity: 0.7 }}>
          <Text>Opacity 0.7</Text>
        </View>
        <View style={{ opacity: 0.9 }}>
          <Text>Opacity 0.9</Text>
        </View>
        <View style={{ opacity: 1 }}>
          <Text>Opacity 1</Text>
        </View>
      </View>
    )
  }
}
