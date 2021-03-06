import React from 'react'
import { Image } from 'react-native'
import {
  createBottomTabNavigator
} from 'react-navigation'
import CompIndex from '../pages/Component/Index/Index'
import APIIndex from '../pages/API/Index/Index'
import PluginsIndex from '../pages/Plugins/Index/Index'

export default createBottomTabNavigator(
  {
    Component: CompIndex,
    API: APIIndex,
    Plugins: PluginsIndex
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let source
        if (routeName === 'Component') {
          source = focused ? require('../images/icon_component_HL.png') : require('../images/icon_component.png')
        } else if (routeName === 'API') {
          source = focused ? require('../images/icon_API_HL.png') : require('../images/icon_API.png')
        } else if (routeName === 'Plugins') {
          source = focused ? require('../images/icon_plugin_HL.png') : require('../images/icon_plugin.png')
        }

        return (
          <Image
            source={source}
            style={{ width: 20, height: 20, tintColor }}
            resizeMode="contain"
          />
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: '#05c160',
      inactiveTintColor: 'gray'
    }
  }
)
