import { StyleSheet /* Dimensions */ } from 'react-native'
import colors from 'src/res/colors'
// const screenWidth = Math.round(Dimensions.get('window').width)

const takeButtonWith = 80

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  takePhotoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: takeButtonWith,
    height: takeButtonWith,
    borderRadius: takeButtonWith / 2,
    backgroundColor: colors.whiteOpacity(3),
  },
  centerTakePhotoButton: {
    width: takeButtonWith * 0.7,
    height: takeButtonWith * 0.7,
    borderRadius: (takeButtonWith * 0.7) / 2,
    backgroundColor: colors.white,
  },
  optionPhotoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: takeButtonWith * 0.7,
    height: takeButtonWith * 0.7,
  },
})

export default styles
