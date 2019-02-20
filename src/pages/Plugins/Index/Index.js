import React from 'react'
import { ScrollView } from 'react-native'
import { WhiteSpace } from 'antd-mobile-rn'
import * as Theme from '../../../theme'
import GroupBlock from '../../../Components/GroupBlock'
import pluginList from './pluginList'

export default class PluginsIndex extends React.Component {
  static navigationOptions = {
    title: '插件'
  }

  render() {
    return (
      <ScrollView style={Theme.styles.page}>
        <WhiteSpace size="lg" />
        {pluginList.map((item, i) => (
          <GroupBlock key={i} group={item} />
        ))}
        <WhiteSpace size="lg" />
      </ScrollView>
    )
  }
}
