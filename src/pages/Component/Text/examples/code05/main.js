import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontFamily: 'sans-serif' }}>Roboto Regular</Text>
        <Text style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>
          Roboto Italic
        </Text>
        <Text style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
          Roboto Bold
        </Text>
        <Text
          style={{
            fontFamily: 'sans-serif',
            fontStyle: 'italic',
            fontWeight: 'bold'
          }}
        >
          Roboto Bold Italic
        </Text>
        <Text style={{ fontFamily: 'sans-serif-light' }}>Roboto Light</Text>
        <Text style={{ fontFamily: 'sans-serif-light', fontStyle: 'italic' }}>
          Roboto Light Italic
        </Text>
        <Text style={{ fontFamily: 'sans-serif-thin' }}>
          Roboto Thin (After 4.2)
        </Text>
        <Text style={{ fontFamily: 'sans-serif-thin', fontStyle: 'italic' }}>
          Roboto Thin Italic (After 4.2)
        </Text>
        <Text style={{ fontFamily: 'sans-serif-condensed' }}>
          Roboto Condensed
        </Text>
        <Text
          style={{
            fontFamily: 'sans-serif-condensed',
            fontStyle: 'italic'
          }}
        >
          Roboto Condensed Italic
        </Text>
        <Text
          style={{ fontFamily: 'sans-serif-condensed', fontWeight: 'bold' }}
        >
          Roboto Condensed Bold
        </Text>
        <Text
          style={{
            fontFamily: 'sans-serif-condensed',
            fontStyle: 'italic',
            fontWeight: 'bold'
          }}
        >
          Roboto Condensed Bold Italic
        </Text>
        <Text style={{ fontFamily: 'sans-serif-medium' }}>
          Roboto Medium (After 5.0)
        </Text>
        <Text style={{ fontFamily: 'sans-serif-medium', fontStyle: 'italic' }}>
          Roboto Medium Italic (After 5.0)
        </Text>
      </View>
    )
  }
}
