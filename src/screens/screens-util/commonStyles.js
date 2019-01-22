import { StyleSheet } from "react-native";

const globalColors = {
  green: "#5cb85c",
  gray: "#f5f5f0"
};

const commonStyles = StyleSheet.create({
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
    borderBottomColor: "#5cb85c",
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
    color: "#5cb85c"
  },

  mclIcon :{
    fontSize:28,
    //color:{globalColors.green}
    color: "#5cb85c"
  },

  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject
  }
});

export { globalColors, commonStyles };
