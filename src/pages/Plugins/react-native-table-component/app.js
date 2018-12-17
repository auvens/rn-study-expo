import { createStackNavigator } from 'react-navigation'
import Home from './components/home'
import ExampleOne from './components/exampleOne'
import ExampleTwo from './components/exampleTwo'
import ExampleThree from './components/exampleThree'
import ExampleFour from './components/exampleFour'
import ExampleFive from './components/exampleFive'
import ExampleSix from './components/exampleSix'

const stackNavigatorConfig = {
  navigationOptions: {
  }
}

export default createStackNavigator(
  {
    Home: {
      screen: Home
    },
    ExampleOne: {
      screen: ExampleOne
    },
    ExampleTwo: {
      screen: ExampleTwo
    },
    ExampleThree: {
      screen: ExampleThree
    },
    ExampleFour: {
      screen: ExampleFour
    },
    ExampleFive: {
      screen: ExampleFive
    },
    ExampleSix: {
      screen: ExampleSix
    }
  },
  stackNavigatorConfig
)
