import { StyleSheet, Dimensions } from 'react-native'
import colors from 'src/res/colors'

const screenWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.withOpacity(colors.gray, 7),
  },
  header: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  emptyBox: {
    height: 25,
    width: 30,
  },
  closeIcon: {
    fontSize: 25,
    marginLeft: 5,
  },
  flatlist: {
    flexDirection: 'column',
  },
  stickerButton: {
    margin: (screenWidth * 0.01),
    width: ((screenWidth - (screenWidth * 0.18)) / 4),
    height: ((screenWidth - (screenWidth * 0.18)) / 4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sticker: {
    width: '100%',
    height: '100%',
  },
})

export default styles
