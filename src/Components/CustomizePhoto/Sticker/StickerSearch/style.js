import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';



const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  SearchContainer: {
    fontWeight: 'bold',
    fontSize: 30,
    flexDirection: 'row',
    width: screenWidth * 0.9,
    display: "flex",
    color: 'white',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  textInput: {
    color: 'white'
  }
});


export default styles
