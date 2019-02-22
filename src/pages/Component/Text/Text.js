import React from 'react'
import { Platform } from 'react-native'
import UIExplorerExampleContainer from '../../../Components/UIExplorerExampleContainer'
import TextExample from './TextExample'
import HeaderRight from '../../../Components/HeaderRight'

export default class CompView extends React.Component {
  static navigationOptions = {
    title: 'Text',
    headerRight: (
      <HeaderRight
        docUrl="https://reactnative.cn/docs/text/"
        codeUrl={
          Platform.OS === 'ios'
            ? 'src/pages/Component/Text/TextExample.ios.js'
            : 'src/pages/Component/Text/TextExample.android.js'
        }
      />
    )
  }

  render() {
    return <UIExplorerExampleContainer module={TextExample} />
  }
}
