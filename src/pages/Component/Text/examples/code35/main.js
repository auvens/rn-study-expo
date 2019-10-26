import React from 'react'
import { Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <Text selectable selectionColor="orange">
        This text will have a orange highlight on selection.
      </Text>
    )
  }
}
