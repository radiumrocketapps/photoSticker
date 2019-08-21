// @flow
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'
import TakePhoto from 'src/Components/TakePhoto'
import CustomizePhoto from 'src/Components/CustomizePhoto'
import StickersModal from 'src/Components/StickersModal'
import PreviewPhoto from 'src/Components/PreviewPhoto'
import * as SCREENS from 'src/navigation/screens'
import colors from 'src/res/colors'

export const HEADER_HIGHT = 60

const MainStack = createStackNavigator(
  {
    [SCREENS.TAKE_PHOTO_SCREEN]: {
      screen: TakePhoto,
    },
    [SCREENS.CUSTOMIZE_PHOTO_SCREEN]: {
      screen: CustomizePhoto,
    },
    [SCREENS.PREVIEW_PHOTO_SCREEN]: {
      screen: PreviewPhoto,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.greenLight,
        height: HEADER_HIGHT,
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
    [SCREENS.STICKERS_MODAL]: {
      screen: StickersModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    cardStyle: { opacity: 1 },
  },
)

const AppContainer = createAppContainer(RootStack)
export default AppContainer
