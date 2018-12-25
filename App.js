import React from 'react'
import { View, StatusBar } from 'react-native'
import App from './src/navigators/AppContainer'

export default class Root extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <App />
        <StatusBar barStyle="dark-content" />
      </View>
    )
  }
}
