import { createStackNavigator } from 'react-navigation'
import TabNavigator from './TabNavigator'
import CompView from '../pages/Component/View/View'
import RNSyntaxHighlighter from '../pages/Plugins/react-native-syntax-highlighter/index'
import RNTable from '../pages/Plugins/react-native-table-component/app'

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]
  
  let headerTitle
  if (routeName === 'Component') {
    headerTitle = '组件'
  } else if (routeName === 'API') {
    headerTitle = 'API'
  } else if (routeName === 'Plugins') {
    headerTitle = '插件'
  }

  return {
    headerTitle
  }
}

RNTable.navigationOptions = {
  header: null
}

export default createStackNavigator({
  Tab: TabNavigator,
  View: CompView,
  RNSyntaxHighlighter,
  RNTable
})
