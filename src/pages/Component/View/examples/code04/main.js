import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View style={{ borderWidth: 0.5, borderRadius: 5, padding: 5 }}>
        <Text style={{ fontSize: 11 }}>
          Too much use of `borderRadius` (especially large radii) on anything
          which is scrolling may result in dropped frames. Use sparingly.
        </Text>
      </View>
    )
  }
}
