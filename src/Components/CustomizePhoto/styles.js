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
    zIndex: 5,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  rightTop: {
    flexDirection: 'row',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 15,
  },
  shareButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 25,
    backgroundColor: colors.whiteOpacity(9),
  },
  shareText: {
    fontFamily: 'Rubik-light',
    fontSize: 18,
    marginRight: 5,
    marginBottom: 1,
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
  waterMarkMirror: {
    transform: [{ scaleX: -1 }],
    left: 5,
  },
  waterMarkNoMirror: {
    right: 5,
  },
  waterMark: {
    position: 'absolute',
    bottom: 0,
    width: '30%',
    marginLeft: 20,
    marginRight: 20,
  },
})

export default styles
