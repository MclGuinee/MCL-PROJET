import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },

  cardStyle: {
    marginBottom: 30
  },

  map: {
    ...StyleSheet.absoluteFillObject
  }

  // map: {
  //   width: width,
  //   height: height,
  //   flex: 1
  // }
});

export { styles };