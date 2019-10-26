import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontStyle: 'normal' }}>Normal text</Text>
        <Text style={{ fontStyle: 'italic' }}>Italic text</Text>
      </View>
    )
  }
}
