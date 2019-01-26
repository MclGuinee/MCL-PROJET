import { StyleSheet } from "react-native";
import { mclColors } from './mclColors';

export const commonStyles = StyleSheet.create({
  headerContainer: {
    marginTop: 10
  },

  centerComponent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", //primary axe
    alignItems: "center" //secondary axe
  },

  rightComponent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  btn: {
    marginTop: 30
  },

  line: {
    borderBottomColor: mclColors.green,
    borderBottomWidth: 3,
    width: "100%",
    marginHorizontal: 5,
    fontWeight: "bold"
  },

  horizontalComponents: {
    flex: 1,
    flexDirection: "column"
  },

  greenColor: {
    color: mclColors.green
  },

  mclIcon :{
    fontSize:28,
    color:globalColors.green
    //color: "#5cb85c"
  },

  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject
  },

  textLabel :{
    //marginRight : 5
  }
});

//export { commonStyles };
