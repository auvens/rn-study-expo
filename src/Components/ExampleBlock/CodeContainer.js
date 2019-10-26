import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter' // 2.0.0
import fetchCodeRaw from '../../utils/fetchCodeRaw'

export default class CodeContainer extends React.Component {
  state = {
    code: '',
    codeActive: 0, // 显示的代码
    loading: false
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
        codeActive: index,
        loading: true
      },
      async () => {
        const code = this.saveCode[index]
        if (code) {
          this.setState(
            {
              code,
              loading: false
            },
            () => {
              this.loading = false
            }
          )
          return
        }
        const res = await fetchCodeRaw(this.props.code[index].url)
        this.saveCode[index] = res
        this.setState(
          {
            code: res,
            loading: false
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
        <View style={[styles.codeBody]}>
          {!this.state.loading ? (
            <SyntaxHighlighter
              customStyle={{ padding: 5, margin: 0 }}
              language="javascript"
              fontSize={14}
              highlighter="prism"
            >
              {this.state.code}
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
  codeLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
