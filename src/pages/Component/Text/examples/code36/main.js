import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.includeFontPaddingText}>Ey</Text>
            <Text>Default</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={[
                styles.includeFontPaddingText,
                { includeFontPadding: false, marginLeft: 10 }
              ]}
            >
              Ey
            </Text>
            <Text>includeFontPadding: false</Text>
          </View>
        </View>
        <Text>
          By default Android will put extra space above text to allow for
          upper-case accents or other ascenders. With some fonts, this can make
          text look slightly misaligned when centered vertically.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  includeFontPaddingText: {
    fontSize: 120,
    fontFamily: 'sans-serif',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    textAlignVertical: 'center',
    alignSelf: 'center'
  }
})
