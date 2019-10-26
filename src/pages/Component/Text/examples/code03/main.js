import React from 'react'
import { View, Text, Platform } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontFamily: Platform.isTVOS ? 'Times' : 'Cochin' }}>
          Cochin
        </Text>
        <Text
          style={{
            fontFamily: Platform.isTVOS ? 'Times' : 'Cochin',
            fontWeight: 'bold'
          }}
        >
          Cochin bold
        </Text>
        <Text style={{ fontFamily: 'Helvetica' }}>Helvetica</Text>
        <Text style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>
          Helvetica bold
        </Text>
        <Text style={{ fontFamily: 'Verdana' }}>Verdana</Text>
        <Text
          style={{
            fontFamily: 'Verdana',
            fontWeight: 'bold'
          }}
        >
          Verdana bold
        </Text>
      </View>
    )
  }
}
