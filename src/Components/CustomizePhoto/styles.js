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
  photoPreview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  shareButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.whiteOpacity(9),
  },
  shareText: {
    fontSize: 16,
    marginRight: 5,
    marginBottom: 3,
  },
  optionPhotoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: takeButtonWith * 0.7,
    height: takeButtonWith * 0.7,
  },
})

export default styles
