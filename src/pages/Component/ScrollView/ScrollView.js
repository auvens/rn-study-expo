import React from 'react'
import { Text } from 'react-native'
import UIExplorerExampleContainer from '../../../Components/UIExplorerExampleContainer'
import ScrollViewExample from './ScrollViewExample'
import HeaderRight from '../../../Components/HeaderRight'

export default class CompView extends React.Component {
  static navigationOptions = {
    title: 'ScrollView',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/scrollview/" codeUrl="src/pages/Component/ScrollView/ScrollViewExample.js" />
  }

  render() {
    return <UIExplorerExampleContainer module={ScrollViewExample} />
  }
}
