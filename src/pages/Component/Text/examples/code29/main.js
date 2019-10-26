import React from 'react'
import { Text, View, Platform } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontVariant: ['small-caps'] }}>Small Caps{'\n'}</Text>
        <Text
          style={{
            fontFamily: Platform.isTVOS ? 'Times' : 'Hoefler Text',
            fontVariant: ['oldstyle-nums']
          }}
        >
          Old Style nums 0123456789{'\n'}
        </Text>
        <Text
          style={{
            fontFamily: Platform.isTVOS ? 'Times' : 'Hoefler Text',
            fontVariant: ['lining-nums']
          }}
        >
          Lining nums 0123456789{'\n'}
        </Text>
        <Text style={{ fontVariant: ['tabular-nums'] }}>
          Tabular nums{'\n'}
          1111{'\n'}
          2222{'\n'}
        </Text>
        <Text style={{ fontVariant: ['proportional-nums'] }}>
          Proportional nums{'\n'}
          1111{'\n'}
          2222{'\n'}
        </Text>
      </View>
    )
  }
}
