import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text selectable={true}>
          This text is <Text style={{ fontWeight: 'bold' }}>selectable</Text> if
          you click-and-hold.
        </Text>
      </View>
    )
  }
}
