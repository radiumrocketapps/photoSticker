// @flow
import { StyleSheet } from 'react-native'
import colors from 'src/res/colors'

const styles = StyleSheet.create({
  stickerPreview: {
    height: 150,
    width: 150,
    zIndex: 8,
  },
  placedSticker: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  selected: {
    borderColor: colors.gray,
    borderWidth: 2,
    borderRadius: 10,
  },
})

export default styles
