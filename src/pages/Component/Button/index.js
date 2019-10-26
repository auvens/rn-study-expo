import React from 'react'
import HeaderRight from '../../../Components/HeaderRight'
import ExamplePage from '../../../Components/ExamplePage'
import examples from './examples'

export default class CompButton extends React.Component {
  static navigationOptions = {
    title: 'Button',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/button/" />
  }

  render() {
    return (
      <ExamplePage
        examples={examples}
        title={'<Button>'}
        description={'Simple React Native button component.'}
      />
    )
  }
}
