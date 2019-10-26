import React from 'react'
import HeaderRight from '../../../Components/HeaderRight'
import ExamplePage from '../../../Components/ExamplePage'
import examples from './examples'

export default class CompView extends React.Component {
  static navigationOptions = {
    title: 'Text',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/text/" />
  }

  render() {
    return (
      <ExamplePage
        examples={examples}
        title={'<Text>'}
        description={'Base component for rendering styled text.'}
      />
    )
  }
}
