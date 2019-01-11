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

  line : {
      borderBottomColor: '#5cb85c',
      borderBottomWidth: 3,
      width: '100%',
      marginHorizontal: 5,
      fontWeight: 'bold'
  }
});

export {globalColors, commonStyles}

