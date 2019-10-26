import React from 'react'
import HeaderRight from '../../../Components/HeaderRight'
import ExamplePage from '../../../Components/ExamplePage'
import examples from './examples'

export default class CompButton extends React.Component {
  static navigationOptions = {
    title: 'DatePickerIOS',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/datepickerios/" />
  }

  render() {
    return (
      <ExamplePage
        examples={examples}
        title={'<DatePickerIOS>'}
        description={'Select dates and times using the native UIDatePicker.'}
      />
    )
  }
}
