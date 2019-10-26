import React from 'react'
import { View, Text } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ backgroundColor: '#ffaaaa' }}>
          Red background,
          <Text style={{ backgroundColor: '#aaaaff' }}>
            {' '}
            blue background,
            <Text>
              {' '}
              inherited blue background,
              <Text style={{ backgroundColor: '#aaffaa' }}>
                {' '}
                nested green background.
              </Text>
            </Text>
          </Text>
        </Text>
        <Text style={{ backgroundColor: 'rgba(100, 100, 100, 0.3)' }}>
          Same alpha as background,
          <Text>
            Inherited alpha from background,
            <Text style={{ backgroundColor: 'rgba(100, 100, 100, 0.3)' }}>
              Reapply alpha （ios 无效）
            </Text>
          </Text>
        </Text>
      </View>
    )
  }
}
