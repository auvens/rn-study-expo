import React from 'react'
import UIExplorerExampleContainer from '../../../Components/UIExplorerExampleContainer'
import ProgressBarAndroidExample from './ProgressBarAndroidExample'
import HeaderRight from '../../../Components/HeaderRight'

export default class CompProgressBarAndroid extends React.Component {
  static navigationOptions = {
    title: 'ProgressBarAndroid',
    headerRight: (
      <HeaderRight
        docUrl="https://reactnative.cn/docs/image/"
        codeUrl="src/pages/Component/Image/ImageExample.js"
      />
    )
  }

  render() {
    return <UIExplorerExampleContainer module={ProgressBarAndroidExample} />
    // return <View><Text>哈哈哈</Text></View>
  }
}
