import React from 'react'
import UIExplorerExampleContainer from '../../../Components/UIExplorerExampleContainer'
import ProgressViewIOSExample from './ProgressViewIOSExample'
import HeaderRight from '../../../Components/HeaderRight'

export default class CompProgressViewIOS extends React.Component {
  static navigationOptions = {
    title: 'ProgressViewIOS',
    headerRight: (
      <HeaderRight
        docUrl="https://reactnative.cn/docs/progressviewios/"
        codeUrl="src/pages/Component/ProgressViewIOS/ProgressViewIOSExample.js"
      />
    )
  }

  render() {
    return <UIExplorerExampleContainer module={ProgressViewIOSExample} />
  }
}
