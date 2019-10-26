import React from 'react'
import { View, Picker, StyleSheet } from 'react-native'

const Item = Picker.Item

export default class Example extends React.Component {
  state = {
    value: 'key1'
  }

  onValueChange = value => {
    this.setState({
      value
    })
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Picker
          style={styles.picker}
          selectedValue={this.state.value}
          onValueChange={this.onValueChange}
        >
          <Item label="hello" value="key0" />
          <Item label="world" value="key1" />
        </Picker>
        <Picker
          style={styles.picker}
          enabled={false}
          selectedValue={this.state.value}
        >
          <Item label="hello" value="key0" />
          <Item label="world" value="key1" />
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    width: 100
  }
})
