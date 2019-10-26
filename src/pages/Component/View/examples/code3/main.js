import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View style={{ borderColor: '#bb0000', borderWidth: 0.5 }}>
        <View style={[styles.box, { padding: 5 }]}>
          <Text style={{ fontSize: 11 }}>5px padding</Text>
        </View>
        <View style={[styles.box, { margin: 5 }]}>
          <Text style={{ fontSize: 11 }}>5px margin</Text>
        </View>
        <View
          style={[
            styles.box,
            { margin: 5, padding: 5, alignSelf: 'flex-start' }
          ]}
        >
          <Text style={{ fontSize: 11 }}>5px margin and padding,</Text>
          <Text style={{ fontSize: 11 }}>widthAutonomous=true</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#527FE4',
    borderColor: '#000033',
    borderWidth: 1
  }
})
