import React from 'react'
import { Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <Text style={{ padding: 10 }}>
        This text is indented by 10px padding on all sides.
      </Text>
    )
  }
}
