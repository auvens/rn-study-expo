import React from 'react'
import { Text, View } from 'react-native'

export default class Example extends React.Component {
  render() {
    return <View>
      <Text>默认</Text>
      <Text style={{ writingDirection: 'auto' }}>自动</Text>
      <Text style={{ writingDirection: 'ltr' }}>从左到右</Text>
      <Text style={{ writingDirection: 'rtl' }}>从右到左</Text>
    </View>
  }
}
