import React from 'react'
import UIExplorerExampleContainer from '../../../Components/UIExplorerExampleContainer'
import TextExample from './TextExample'

export default class CompView extends React.Component {
  static navigationOptions = {
    title: 'Text'
  }

  render() {
    return <UIExplorerExampleContainer module={TextExample} />
  }
}
