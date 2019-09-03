import { StyleSheet } from 'react-native'
import colors from 'src/res/colors'

const styles = StyleSheet.create({
  SearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  textInput: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
    flex: 1,
  },
})

export default styles
