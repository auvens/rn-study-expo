import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid'
          }}
        >
          Solid underline
        </Text>
        <Text
          style={{
            textDecorationLine: 'underline',
            textDecorationStyle: 'double',
            textDecorationColor: '#ff0000'
          }}
        >
          Double underline with custom color
        </Text>
        <Text
          style={{
            textDecorationLine: 'underline',
            textDecorationStyle: 'dashed',
            textDecorationColor: '#9CDC40'
          }}
        >
          Dashed underline with custom color
        </Text>
        <Text
          style={{
            textDecorationLine: 'underline',
            textDecorationStyle: 'dotted',
            textDecorationColor: 'blue'
          }}
        >
          Dotted underline with custom color
        </Text>
        <Text style={{ textDecorationLine: 'none' }}>None textDecoration</Text>
        <Text
          style={{
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid'
          }}
        >
          Solid line-through
        </Text>
        <Text
          style={{
            textDecorationLine: 'line-through',
            textDecorationStyle: 'double',
            textDecorationColor: '#ff0000'
          }}
        >
          Double line-through with custom color
        </Text>
        <Text
          style={{
            textDecorationLine: 'line-through',
            textDecorationStyle: 'dashed',
            textDecorationColor: '#9CDC40'
          }}
        >
          Dashed line-through with custom color
        </Text>
        <Text
          style={{
            textDecorationLine: 'line-through',
            textDecorationStyle: 'dotted',
            textDecorationColor: 'blue'
          }}
        >
          Dotted line-through with custom color
        </Text>
        <Text style={{ textDecorationLine: 'underline line-through' }}>
          Both underline and line-through
        </Text>
        <Text>
          Mixed text with{' '}
          <Text style={{ textDecorationLine: 'underline' }}>underline</Text>{' '}
          and{' '}
          <Text style={{ textDecorationLine: 'line-through' }}>
            line-through
          </Text>{' '}
          text nodes
        </Text>
      </View>
    )
  }
}
