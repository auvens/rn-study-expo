import React from 'react'
import { Text, View, Button } from 'react-native'
import CompBlock from '../../../Components/CompBlock'
import * as Theme from '../../../theme'

export default class PluginsIndex extends React.Component {
  static navigationOptions = {
    title: '插件'
  }

  render() {
    const list = [
      {
        label: 'react-native-syntax-highlighter',
        android: true,
        ios: true,
        route: 'RNSyntaxHighlighter'
      },
      {
        label: 'react-native-table-component',
        android: true,
        ios: true,
        route: 'RNTable'
      }
    ]
    return (
      <View style={Theme.styles.page}>
        <CompBlock blockTitle="插件" list={list} />
      </View>
    )
  }
}
