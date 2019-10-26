import React from 'react'
import { Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <Text>
        A {'generated'} {'string'} and some &nbsp;&nbsp;&nbsp; spaces
      </Text>
    )
  }
}
