import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: 'notoserif' }}>NotoSerif Regular</Text>
          <Text
            style={{
              fontFamily: 'notoserif',
              fontStyle: 'italic',
              fontWeight: 'bold'
            }}
          >
            NotoSerif Bold Italic
          </Text>
          <Text style={{ fontFamily: 'notoserif', fontStyle: 'italic' }}>
            NotoSerif Italic (Missing Font file)
          </Text>
        </View>
      </View>
    )
  }
}
