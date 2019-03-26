import * as actionType from "./deliveryActionTypes";
import * as deliveryService from "../../services/DeliveryService";

// Add delivery
export function saveDelivery(delivery) {
  return dispatch => {
    deliveryService
      .saveDelivery(delivery)
      .then(deliveryRef => {
        delivery.deliveryId = deliveryRef;
        dispatch({ type: actionType.ORDER, delivery });
      })
      .catch(error => console.error(error));
  };
}
