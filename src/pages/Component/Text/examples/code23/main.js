import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text numberOfLines={1}>
          Maximum of one line, no matter how much I write here. If I keep
          writing, it{"'"}ll just truncate after one line.
        </Text>
        <Text numberOfLines={2} style={{ marginTop: 20 }}>
          Maximum of two lines, no matter how much I write here. If I keep
          writing, it{"'"}ll just truncate after two lines.
        </Text>
        <Text style={{ marginTop: 20 }}>
          No maximum lines specified, no matter how much I write here. If I
          keep writing, it{"'"}ll just keep going and going.
        </Text>
      </View>
    )
  }
}
