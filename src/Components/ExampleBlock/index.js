import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Markdown from 'react-native-simple-markdown'
import MDStyles from './MDStyles'
import CodeContainer from './CodeContainer'

export default class ExampleContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCode: false // 是否显示代码
    }
    this.codeContainer = React.createRef()
  }
  toggleShowCode = () => {
    this.setState((state, props) => {
      this.codeContainer.current.changeCode()
      return {
        showCode: !state.showCode
      }
    })
  }
  render() {
    const { example } = this.props
    return (
      <View style={styles.container}>
        {example.title ? <Text style={styles.title}>{example.title}</Text> : null}
        {example.desc ? <View style={styles.desc}><Markdown styles={MDStyles}>{example.desc}</Markdown></View> : null}
        <View style={styles.exampleBlock}>
          <View style={styles.example}>
            {example.render()}
          </View>
          {example.code && example.code.length ? <View style={styles.code}>
            <CodeContainer ref={this.codeContainer} code={example.code} showCode={this.state.showCode} />
            <TouchableOpacity onPress={this.toggleShowCode}>
              <View style={styles.codeControl}>
                <Text style={styles.codeControlText}>显示代码</Text>
              </View>
            </TouchableOpacity>
          </View> : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    color: '#1f2f3d',
    fontWeight: '400',
    marginTop: 5,
    marginBottom: 15
  },
  desc: {
    marginBottom: 15
  },
  exampleBlock: {
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 3,
    overflow: 'hidden'
  },
  example: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ebebeb'
  },
  code: {},
  codeControl: {
  },
  codeControlText: {
    backgroundColor: '#f9fafc',
    textAlign: 'center',
    height: 35,
    lineHeight: 35,
    color: '#05c160'
  }
})
