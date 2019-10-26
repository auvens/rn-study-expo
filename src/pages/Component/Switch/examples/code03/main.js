import React from 'react'
import { View, Switch, Text } from 'react-native'

export default class EventSwitchExample extends React.Component {
  state = {
    eventSwitchIsOn: false,
    eventSwitchRegressionIsOn: true
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <Switch
            onValueChange={value => this.setState({ eventSwitchIsOn: value })}
            style={{ marginBottom: 10 }}
            value={this.state.eventSwitchIsOn}
          />
          <Switch
            onValueChange={value => this.setState({ eventSwitchIsOn: value })}
            style={{ marginBottom: 10 }}
            value={this.state.eventSwitchIsOn}
          />
          <Text>{this.state.eventSwitchIsOn ? 'On' : 'Off'}</Text>
        </View>
        <View>
          <Switch
            onValueChange={value =>
              this.setState({ eventSwitchRegressionIsOn: value })
            }
            style={{ marginBottom: 10 }}
            value={this.state.eventSwitchRegressionIsOn}
          />
          <Switch
            onValueChange={value =>
              this.setState({ eventSwitchRegressionIsOn: value })
            }
            style={{ marginBottom: 10 }}
            value={this.state.eventSwitchRegressionIsOn}
          />
          <Text>{this.state.eventSwitchRegressionIsOn ? 'On' : 'Off'}</Text>
        </View>
      </View>
    )
  }
}
