import React from 'react'
import { Text, View } from 'react-native'
import * as Theme from '../../../theme'

export default class APIIndex extends React.Component {
  static navigationOptions = {
    title: 'API'
  }

  render() {
    return (
      <View style={[Theme.styles.page, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>react native 相关 API</Text>
      </View>
    )
  }
}
