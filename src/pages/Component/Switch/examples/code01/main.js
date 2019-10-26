import React from 'react'
import { View, Switch } from 'react-native'

export default class BasicSwitchExample extends React.Component {
  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false
  }

  render() {
    return (
      <View>
        <Switch
          onValueChange={value => this.setState({ falseSwitchIsOn: value })}
          style={{ marginBottom: 10 }}
          value={this.state.falseSwitchIsOn}
        />
        <Switch
          onValueChange={value => this.setState({ trueSwitchIsOn: value })}
          value={this.state.trueSwitchIsOn}
        />
      </View>
    )
  }
}
