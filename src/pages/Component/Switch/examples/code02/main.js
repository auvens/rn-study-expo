import React from 'react'
import { View, Switch } from 'react-native'

export default class DisabledSwitchExample extends React.Component {
  render() {
    return (
      <View>
        <Switch disabled={true} style={{ marginBottom: 10 }} value={true} />
        <Switch disabled={true} value={false} />
      </View>
    )
  }
}
