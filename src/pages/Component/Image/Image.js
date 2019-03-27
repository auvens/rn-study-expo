import React from 'react'
import { View, Text, Button } from 'react-native'
import UIExplorerExampleContainer from '../../../Components/UIExplorerExampleContainer'
import ImageExample from './ImageExample'
import HeaderRight from '../../../Components/HeaderRight'

export default class CompImage extends React.Component {
  static navigationOptions = {
    title: 'Image',
    headerRight: (
      <HeaderRight
        docUrl="https://reactnative.cn/docs/image/"
        codeUrl="src/pages/Component/Image/ImageExample.js"
      />
    )
  }

  render() {
    return <UIExplorerExampleContainer module={ImageExample} />
    // return <View><Text>哈哈哈</Text></View>
  }
}
