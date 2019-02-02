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
    color:mclColors.green
  },

  tabBarIcon :{
    fontSize:28
  },

  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject
  },

});

