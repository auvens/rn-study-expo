import React from 'react'
import { View, Picker, StyleSheet } from 'react-native'

const Item = Picker.Item

export default class Example extends React.Component {
  state = {
    value: 'red'
  }

  onValueChange = value => {
    this.setState({
      value
    })
  }

  render() {
    return (
      <View>
        <Picker
          style={[styles.picker, { color: 'white', backgroundColor: '#333' }]}
          selectedValue={this.state.value}
          onValueChange={this.onValueChange}
          mode="dropdown"
        >
          <Item label="red" color="red" value="red" />
          <Item label="green" color="green" value="green" />
          <Item label="blue" color="blue" value="blue" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={this.state.value}
          onValueChange={this.onValueChange}
          mode="dialog"
        >
          <Item label="red" color="red" value="red" />
          <Item label="green" color="green" value="green" />
          <Item label="blue" color="blue" value="blue" />
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
