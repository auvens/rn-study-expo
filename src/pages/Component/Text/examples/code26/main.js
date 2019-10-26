import React from 'react'
import { Text, Image } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <Text>
        <Text>This text contains an inline blue view </Text>
        <Text
          style={{ width: 25, height: 25, backgroundColor: 'steelblue' }}
        />
        <Text> and an inline image </Text>
        <Image
          source={require('../../flux.png')}
          style={{ width: 30, height: 11, resizeMode: 'cover' }}
        />
        <Text>. Neat, huh?</Text>
      </Text>
    )
  }
}
