import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Lorem ipsum dolor sit amet,{' '}
          <Text
            suppressHighlighting={false}
            style={{
              backgroundColor: 'white',
              textDecorationLine: 'underline',
              color: 'blue'
            }}
            onPress={() => null}
          >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud
          </Text>{' '}
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </View>
    )
  }
}
