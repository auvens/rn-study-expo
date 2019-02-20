import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile-rn'
import CompBlock from '../../../Components/CompBlock'
import * as Theme from '../../../theme'
import GroupBlock from '../../../Components/GroupBlock'
import groupList from './groupList'

export default class CompIndex extends React.Component {
  static navigationOptions = {
    title: '组件'
  }

  render() {
    return (
      <ScrollView style={Theme.styles.page}>
        <WhiteSpace size="lg" />
        {groupList.map((item, i) => (
          <GroupBlock key={i} group={item} />
        ))}
        <WhiteSpace size="lg" />
      </ScrollView>
    )
  }
}
