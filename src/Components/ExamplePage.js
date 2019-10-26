import React from 'react'
import { ScrollView } from 'react-native'
import ExampleBlock from './ExampleBlock'
import * as Theme from '../theme'

export default class ExamplePage extends React.Component {
  render() {
    const { examples } = this.props
    return (
      <ScrollView style={Theme.styles.page}>
        {examples.map((item, index) => (<ExampleBlock key={index} example={item} />))}
      </ScrollView>
    )
  }
}
