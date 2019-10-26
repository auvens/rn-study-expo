import React from 'react'
import { View, Text } from 'react-native'

class Entity extends React.Component {
  render() {
    return (
      <Text style={{ fontWeight: '500', color: '#527fe4' }}>
        {this.props.children}
      </Text>
    )
  }
}

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text>
          (Normal text,
          <Text style={{ fontWeight: 'bold' }}>
            (and bold
            <Text style={{ fontSize: 11, color: '#527fe4' }}>
              (and tiny inherited bold blue)
            </Text>
            )
          </Text>
          )
        </Text>
        <Text style={{ opacity: 0.7 }}>
          (opacity
          <Text>
            (is inherited
            <Text style={{ opacity: 0.7 }}>
              (and accumulated
              <Text style={{ backgroundColor: '#ffaaaa' }}>
                (and also applies to the background)
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
