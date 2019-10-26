import React from 'react'
import {
  View,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
  Text
} from 'react-native'
import { WebView } from 'react-native-webview'

export default class DocViewer extends React.Component {
  static navigationOptions = {
    title: '文档'
  }

  state = {
    canGoBack: false,
    canGoForward: false
  }

  onNavigationStateChange = state => {
    console.log(state)
    this.setState({
      canGoBack: state.canGoBack,
      canGoForward: state.canGoForward
    })
  }

  // 回退
  goBack = () => {
    if (!this.state.canGoBack) {
      return
    }
    this.webview.goBack()
  }

  // 前进
  goForward = () => {
    if (!this.state.canGoForward) {
      return
    }
    this.webview.goForward()
  }

  render() {
    const { navigation } = this.props
    const { canGoBack, canGoForward } = this.state
    const docUrl = navigation.getParam('docUrl', 'http://www.github.com')
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          style={{ flex: 1 }}
          ref={webview => (this.webview = webview)}
          source={{ uri: docUrl }}
          onNavigationStateChange={this.onNavigationStateChange}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TouchableWithoutFeedback onPress={this.goBack}>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10
              }}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: canGoBack ? '#1a1a1a' : '#C7C7CC'
                }}
                source={require('../../images/icon_left.png')}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.goForward}>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10
              }}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: canGoForward ? '#1a1a1a' : '#C7C7CC'
                }}
                source={require('../../images/icon-right.png')}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    )
  }
}
