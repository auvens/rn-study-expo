import React from 'react'
import HeaderRight from '../../../Components/HeaderRight'
import ExamplePage from '../../../Components/ExamplePage'
import examples from './examples'

export default class CompView extends React.Component {
  static navigationOptions = {
    title: 'View',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/view/" />
  }

  render() {
    return (
      <ExamplePage
        examples={examples}
        title={'<View>'}
        description={
          'Basic building block of all UI, examples that demonstrate some of the many styles available.'
        }
      />
    )
  }
}
