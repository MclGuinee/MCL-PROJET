import { StyleSheet } from "react-native";
import { globalColors } from "../screens-util/commonStyles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },

  cardStyle: {
    marginBottom: 30
  },

  deliveryDate: {
    fontWeight: "bold",
    color: globalColors.green
  },

});

export { styles };
