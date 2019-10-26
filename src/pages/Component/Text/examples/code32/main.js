import React from 'react'
import { Text, View } from 'react-native'

class Entity extends React.Component {
  render() {
    return (
      <Text style={{ fontWeight: 'bold', color: '#527fe4' }}>
        {this.props.children}
      </Text>
    )
  }
}

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text onPress={() => console.log('1st')}>
          (Normal text,
          <Text
            style={{ fontWeight: 'bold' }}
            onPress={() => console.log('2nd')}
          >
            (and bold
            <Text
              style={{ fontStyle: 'italic', fontSize: 11, color: '#527fe4' }}
              onPress={() => console.log('3rd')}
            >
              (and tiny bold italic blue
              <Text
                style={{ fontWeight: 'normal', fontStyle: 'normal' }}
                onPress={() => console.log('4th')}
              >
                (and tiny normal blue)
              </Text>
              )
            </Text>
            )
          </Text>
          )
        </Text>
        <Text
          style={{ fontFamily: 'serif' }}
          onPress={() => console.log('1st')}
        >
          (Serif
          <Text
            style={{ fontStyle: 'italic', fontWeight: 'bold' }}
            onPress={() => console.log('2nd')}
          >
            (Serif Bold Italic
            <Text
              style={{
                fontFamily: 'monospace',
                fontStyle: 'normal',
                fontWeight: 'normal'
              }}
              onPress={() => console.log('3rd')}
            >
              (Monospace Normal
              <Text
                style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}
                onPress={() => console.log('4th')}
              >
                (Sans-Serif Bold
                <Text
                  style={{ fontWeight: 'normal' }}
                  onPress={() => console.log('5th')}
                >
                  (and Sans-Serif Normal)
                </Text>
                )
              </Text>
              )
            </Text>
            )
          </Text>
          )
        </Text>
        <Text style={{ fontSize: 12 }}>
          <Entity>Entity Name</Entity>
        </Text>
      </View>
    )
  }
}
