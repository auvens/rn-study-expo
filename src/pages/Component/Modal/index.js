import React from 'react'
import HeaderRight from '../../../Components/HeaderRight'
import ExamplePage from '../../../Components/ExamplePage'
import examples from './examples'

export default class CompButton extends React.Component {
  static navigationOptions = {
    title: 'Modal',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/modal/" />
  }

  render() {
    return (
      <ExamplePage
        examples={examples}
        title={'<Modal>'}
        description={'Component for presenting modal views.'}
      />
    )
  }
}
