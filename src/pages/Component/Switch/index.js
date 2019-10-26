import React from 'react'
import HeaderRight from '../../../Components/HeaderRight'
import ExamplePage from '../../../Components/ExamplePage'
import examples from './examples'

export default class CompButton extends React.Component {
  static navigationOptions = {
    title: 'Switch',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/switch/" />
  }

  render() {
    return (
      <ExamplePage
        examples={examples}
        title={'<Switch>'}
        description={'Native boolean input.'}
      />
    )
  }
}
