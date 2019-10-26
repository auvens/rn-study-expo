import React from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

const Item = Picker.Item

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Picker style={styles.picker}>
          <Item label="hello" value="key0" />
          <Item label="world" value="key1" />
        </Picker>
        <Text>
          Cannot change the value of this picker because it doesn't update
          selectedValue.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    width: 100
  }
})
