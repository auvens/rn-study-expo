import React from 'react'
import { Picker, StyleSheet } from 'react-native'

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
      <Picker
        style={styles.picker}
        selectedValue={this.state.value}
        onValueChange={this.onValueChange}
        prompt="Pick one, just one"
      >
        <Item label="hello" value="key0" />
        <Item label="world" value="key1" />
      </Picker>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    width: 100
  }
})
