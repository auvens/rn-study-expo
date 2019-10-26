import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Platform
} from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter' // 2.0.0
import fetchCodeRaw from '../../utils/fetchCodeRaw'

export default class CodeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      codes: props.code.map(item => ''), // 存放拉取的代码
      codeActive: 0 // 显示的代码
    }
  }
  saveCode = []
  loading = false
  // 切换代码
  changeCode(index) {
    index = index === undefined ? this.state.codeActive : index
    if (this.loading) {
      return
    }
    this.loading = true
    this.setState(
      {
        codeActive: index
      },
      async () => {
        const codes = this.state.codes
        const code = codes[index]
        if (code) {
          this.loading = false
          return
        }
        const res = await fetchCodeRaw(this.props.code[index].url)
        codes[index] = res
        this.setState(
          {
            codes
          },
          () => {
            this.loading = false
          }
        )
      }
    )
  }
  render() {
    const { code, showCode } = this.props
    const { codes } = this.state
    return (
      <View style={{ height: showCode ? 'auto' : 0 }}>
        <ScrollView horizontal={true}>
          {code.map((item, index) => (
            <Text
              key={index}
              style={[
                styles.codeName,
                this.state.codeActive === index ? styles.codeNameActive : null
              ]}
              onPress={() => this.changeCode(index)}
            >
              {item.name}
            </Text>
          ))}
        </ScrollView>
        <View
          style={[
            styles.codeBody,
            Platform.OS === 'ios' ? styles.codeBodyFixHeight : null
          ]}
        >
          {codes[this.state.codeActive] ? (
            <SyntaxHighlighter
              customStyle={{ padding: 5, margin: 0 }}
              language="javascript"
              fontSize={14}
              highlighter="prism"
            >
              {codes[this.state.codeActive]}
            </SyntaxHighlighter>
          ) : (
            <View style={[styles.codeLoading]}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
        </View>
      </View>
    )
  }
}

const styles = {
  container: {},
  codeName: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    textDecorationLine: 'underline'
  },
  codeNameActive: {
    color: '#05c160'
  },
  codeBody: {
    minHeight: 300
  },
  codeBodyFixHeight: {
    height: 300
  },
  codeLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
