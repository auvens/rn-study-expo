import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', height: 85 }}>
          <View style={{ backgroundColor: '#ffaaaa', width: 150 }} />
          <View style={{ backgroundColor: '#aaaaff', width: 150 }} />
        </View>
        <Text style={[styles.backgroundColorText, { top: -80 }]}>
          Default containerBackgroundColor (inherited) + backgroundColor wash
        </Text>
        <Text
          style={[
            styles.backgroundColorText,
            { top: -70, backgroundColor: 'transparent' }
          ]}
        >
          {"containerBackgroundColor: 'transparent' + backgroundColor wash"}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundColorText: {
    left: 5,
    backgroundColor: 'rgba(100, 100, 100, 0.3)'
  }
})
