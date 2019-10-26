import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text>auto (default) - english LTR</Text>
        <Text>أحب اللغة العربية auto (default) - arabic RTL</Text>
        <Text style={{ textAlign: 'left' }}>
          left left left left left left left left left left left left left
          left left
        </Text>
        <Text style={{ textAlign: 'center' }}>
          center center center center center center center center center
          center center
        </Text>
        <Text style={{ textAlign: 'right' }}>
          right right right right right right right right right right right
          right right
        </Text>
        <Text style={{ textAlign: 'justify' }}>
          justify: this text component{"'"}s contents are laid out with
          "textAlign: justify" and as you can see all of the lines except the
          last one span the available width of the parent container.（安卓不生效）
        </Text>
      </View>
    )
  }
}
