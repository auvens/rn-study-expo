import React from 'react'
import { Text, View, Button } from 'react-native'

export default class PluginsIndex extends React.Component {
  static navigationOptions = {
    title: '插件'
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>react native 相关插件</Text>
        <Button title="react-native-syntax-highlighter" onPress={() => this.props.navigation.navigate('RNSyntaxHighlighter')}/>
        <Button title="react-native-table-component" onPress={() => this.props.navigation.navigate('RNTable')}/>
      </View>
    )
  }
}
