import React from 'react'
import { View, Text, Button } from 'react-native'
import UIExplorerExampleContainer from '../../../Components/UIExplorerExampleContainer'
import ViewExample from './ViewExample'
import HeaderRight from '../../../Components/HeaderRight'

export default class CompView extends React.Component {
  static navigationOptions = {
    title: 'View',
    headerRight: (
      <HeaderRight
        docUrl="https://reactnative.cn/docs/view/"
        codeUrl="src/pages/Component/View/ViewExample.js"
      />
    )
  }

  render() {
    return <UIExplorerExampleContainer module={ViewExample} />
  }
}
