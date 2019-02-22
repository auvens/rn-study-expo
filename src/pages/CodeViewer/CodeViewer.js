import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter' // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1
import fetchCodeRaw from '../../utils/fetchCodeRaw'

export default class App extends React.Component {
  static navigationOptions = {
    title: '代码'
  }

  constructor(props) {
    super(props)
    this.state = { code: '' }
    this.didBlurSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.getCode()
      }
    )
  }

  getCode = async () => {
    const { navigation } = this.props
    const codeUrl = navigation.getParam('codeUrl', 'App.js')
    const res = await fetchCodeRaw(codeUrl)
    this.setState({
      code: res
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <SyntaxHighlighter
            {...this.props}
            style={tomorrow}
            customStyle={{ padding: 0, margin: 0 }}
            language="javascript"
            fontSize={14}
            highlighter="prism"
          >
            {this.state.code}
          </SyntaxHighlighter>
        </SafeAreaView>
      </View>
    )
  }
}
