import React from 'react'
import { View, Text, Button } from 'react-native'
import UIExplorerExampleContainer from '../../../Components/UIExplorerExampleContainer'
import ViewExample from './ViewExample'

export default class CompView extends React.Component {
  static navigationOptions = {
    title: 'View 组件'
  }

  render() {
    return <UIExplorerExampleContainer module={ViewExample} />
  }
}
