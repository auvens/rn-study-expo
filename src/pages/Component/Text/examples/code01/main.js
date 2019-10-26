import React from 'react'
import { Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <Text>
        The text should wrap if it goes on multiple lines. See, this is going to
        the next line.
      </Text>
    )
  }
}
