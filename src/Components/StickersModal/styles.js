import { StyleSheet, Dimensions } from 'react-native'
import colors from 'src/res/colors'

const screenWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: screenWidth * 0.05,
    backgroundColor: colors.withOpacity(colors.gray, 7),
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
  },
})

export default styles
