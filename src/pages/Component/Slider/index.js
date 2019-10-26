import React from 'react'
import HeaderRight from '../../../Components/HeaderRight'
import ExamplePage from '../../../Components/ExamplePage'
import examples from './examples'

export default class CompButton extends React.Component {
  static navigationOptions = {
    title: 'Slider',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/slider/" />
  }

  render() {
    return (
      <ExamplePage
        examples={examples}
        title={'<Slider>'}
        description={'Slider input for numeric values.'}
      />
    )
  }
}
