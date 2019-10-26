import React from 'react'
import HeaderRight from '../../../Components/HeaderRight'
import ExamplePage from '../../../Components/ExamplePage'
import examples from './examples'

export default class CompButton extends React.Component {
  static navigationOptions = {
    title: 'Picker',
    headerRight: <HeaderRight docUrl="https://reactnative.cn/docs/picker/" />
  }

  render() {
    return (
      <ExamplePage
        examples={examples}
        title={'<Picker>'}
        description={'Provides multiple options to choose from, using either a dropdown menu or a dialog.'}
      />
    )
  }
}
