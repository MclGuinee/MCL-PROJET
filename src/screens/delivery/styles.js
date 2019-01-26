import { StyleSheet } from "react-native";
import { mclColors } from '../screens-util/mclColors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },

  cardStyle: {
    marginBottom: 30
  },

  deliveryDate: {
    fontWeight: "bold",
    color: mclColors.green
  },

});

export { styles };
