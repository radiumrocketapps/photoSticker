// @flow
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'
import HomeScreen from 'src/Components/HomeScreen'
import * as SCREENS from 'src/navigation/screens'
import colors from 'src/res/colors'

const MainStack = createStackNavigator(
  {
    [SCREENS.HOME_SCREEN]: {
      screen: HomeScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.greenLight,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        width: '100%',
      },
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
