import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'

export default class SliderExample extends React.Component {
  static defaultProps = {
    value: 0
  }

  state = {
    value: this.props.value
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={value => this.setState({ value: value })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10
  }
})
