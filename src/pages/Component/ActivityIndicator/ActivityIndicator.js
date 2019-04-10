import React from 'react'
import UIExplorerExampleContainer from '../../../Components/UIExplorerExampleContainer'
import ActivityIndicatorExample from './ActivityIndicatorExample'
import HeaderRight from '../../../Components/HeaderRight'

export default class CompActivityIndicator extends React.Component {
  static navigationOptions = {
    title: 'ActivityIndicator',
    headerRight: (
      <HeaderRight
        docUrl="https://reactnative.cn/docs/activityindicator/"
        codeUrl="src/pages/Component/ActivityIndicator/ActivityIndicatorExample.js"
      />
    )
  }

  render() {
    return <UIExplorerExampleContainer module={ActivityIndicatorExample} />
    // return <View><Text>哈哈哈</Text></View>
  }
}
