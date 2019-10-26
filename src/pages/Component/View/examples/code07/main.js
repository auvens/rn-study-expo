import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: 95,
            height: 10,
            marginRight: 10,
            marginBottom: 5,
            overflow: 'hidden',
            borderWidth: 0.5
          }}
        >
          <View style={{ width: 200, height: 20 }}>
            <Text>Overflow hidden</Text>
          </View>
        </View>
        <View
          style={{ width: 95, height: 10, marginBottom: 5, borderWidth: 0.5 }}
        >
          <View style={{ width: 200, height: 20 }}>
            <Text>Overflow visible</Text>
          </View>
        </View>
      </View>
    )
  }
}
