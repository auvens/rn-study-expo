import React from 'react'
import { Text, View } from 'react-native'

export default class Example extends React.Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ backgroundColor: 'red' }}>
            星际争霸是世界上最好的游戏。
          </Text>
        </View>
        <View>
          <Text style={{ backgroundColor: 'red' }}>
            星际争霸是世界上最好的游戏。
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ backgroundColor: 'red' }}>
            星际争霸是世界上最好的游戏。
          </Text>
        </View>
        <View>
          <Text style={{ backgroundColor: 'red' }}>
            星际争霸是世界上最好的游戏。星际争霸是世界上最好的游戏。星际争霸是世界上最好的游戏。星际争霸是世界上最好的游戏。
          </Text>
        </View>
      </View>
    )
  }
}
