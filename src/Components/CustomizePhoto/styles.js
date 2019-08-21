import { StyleSheet } from 'react-native'
import colors from 'src/res/colors'

const takeButtonWith = 80

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoPreview: {
    flex: 1,
  },
  photoContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
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
  mirror: {
    transform: [{ scaleX: -1 }],
  },
})

export default styles
