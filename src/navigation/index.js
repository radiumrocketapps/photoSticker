// @flow
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'
import HomeScreen from 'src/Components/HomeScreen'
import * as SCREENS from 'src/navigation/screens'

const MainStack = createStackNavigator(
  {
    [SCREENS.HOME_SCREEN]: {
      screen: HomeScreen,
    },
  },
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    // MyModal: {
    //   screen: ModalScreen,
    // },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

const AppContainer = createAppContainer(RootStack)
export default AppContainer
