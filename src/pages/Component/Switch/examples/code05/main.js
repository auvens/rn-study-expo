import React from 'react'
import { View, Switch } from 'react-native'

export default class ColorSwitchExample extends React.Component {
  state = {
    colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false
  }

  render() {
    return (
      <View>
        <Switch
          onValueChange={value =>
            this.setState({ colorFalseSwitchIsOn: value })
          }
          style={{ marginBottom: 10 }}
          thumbColor="#0000ff"
          trackColor={{ false: '#ff0000', true: '#00ff00' }}
          value={this.state.colorFalseSwitchIsOn}
        />
        <Switch
          onValueChange={value => this.setState({ colorTrueSwitchIsOn: value })}
          thumbColor="#0000ff"
          trackColor={{ false: '#ff0000', true: '#00ff00' }}
          value={this.state.colorTrueSwitchIsOn}
        />
      </View>
    )
  }
}
