import React from 'react'
import { Text, View } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 1,
            textShadowColor: '#00cccc'
          }}
        >
          Demo text shadow
        </Text>
      </View>
    )
  }
}
