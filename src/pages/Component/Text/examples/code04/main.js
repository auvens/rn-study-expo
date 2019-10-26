import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontFamily: 'sans-serif' }}>Sans-Serif</Text>
        <Text style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
          Sans-Serif Bold
        </Text>
        <Text style={{ fontFamily: 'serif' }}>Serif</Text>
        <Text style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
          Serif Bold
        </Text>
        <Text style={{ fontFamily: 'monospace' }}>Monospace</Text>
        <Text style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
          Monospace Bold (After 5.0)
        </Text>
      </View>
    )
  }
}
