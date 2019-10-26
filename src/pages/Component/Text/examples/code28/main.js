import React from 'react'
import { Text, View } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text numberOfLines={1}>
          This very long text should be truncated with dots in the end.
        </Text>
        <Text ellipsizeMode="middle" numberOfLines={1}>
          This very long text should be truncated with dots in the middle.
        </Text>
        <Text ellipsizeMode="head" numberOfLines={1}>
          This very long text should be truncated with dots in the beginning.
        </Text>
        <Text ellipsizeMode="clip" numberOfLines={1}>
          This very looooooooooooooooooooooooooooong text should be clipped.
        </Text>
      </View>
    )
  }
}
