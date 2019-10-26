import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text>
          By default, text will respect Text Size accessibility setting on
          iOS. It means that all font sizes will be increased or descreased
          depending on the value of Text Size setting in{' '}
          <Text style={{ fontWeight: 'bold' }}>
            Settings.app - Display & Brightness - Text Size
          </Text>
        </Text>
        <Text style={{ marginTop: 10 }}>
          You can disable scaling for your Text component by passing {'"'}
          allowFontScaling={'{'}false{'}"'} prop.
        </Text>
        <Text allowFontScaling={false} style={{ marginTop: 20 }}>
          This text will not scale.
        </Text>
      </View>
    )
  }
}
