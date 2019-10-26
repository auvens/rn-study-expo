import React from 'react'
import HeaderRight from '../../../Components/HeaderRight'
import ExamplePage from '../../../Components/ExamplePage'
import examples from './examples'

export default class CompButton extends React.Component {
  static navigationOptions = {
    title: 'PickerIOS',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/pickerios/" />
  }

  render() {
    return (
      <ExamplePage
        examples={examples}
        title={'<PickerIOS>'}
        description={'Render lists of selectable options with UIPickerView.'}
      />
    )
  }
}
