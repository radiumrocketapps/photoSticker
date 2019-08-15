import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  galleryButton: {
    width: screenWidth / 6,
    height: screenWidth / 6,
    borderRadius: (screenWidth / 6) / 2,
    backgroundColor: 'white',
  },
})

export default styles
