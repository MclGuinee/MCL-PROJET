import {
    database
} from "../config/firebase-init";

import geolib from 'geolib';
import firebase from 'firebase';


/**
 * Save a delivery order.
 * @param {*} delivery delivery to save
 */
export function saveDelivery(delivery) {
    return new Promise((resolve, reject) => {

        delivery.createDate = firebase.firestore.FieldValue.serverTimestamp();
        delivery.updateDate = firebase.firestore.FieldValue.serverTimestamp();

        //Get collection
        var deliveries = database.collection("deliveries");

        //create empty doc with generate id
        var newDocRef = deliveries.doc();

        //add delivery to doc
        newDocRef.set(delivery, {
                merge: false
            })
            .then(savedDelivery => {
                console.log("Delivery successfully written wih id :" + savedDelivery.id);
                resolve(savedDelivery);
            })
            .catch(error => {
                console.error("Error writing delivery: ", error);
                reject(error);

            });
    });
}



/**
 * Calculate delivery cost
 * @param {*} delivery delevery to calculate cost
 */
export function calculateDeliveryCost(delivery) {

    return new Promise((resolve, reject) => {

        //Calculate distance between two geoPoint
        var distanceInKm = geolib.getDistance(delivery.startAddressGeoPoint, delivery.endAddressGeoPoint);

        //Get price policies
        var docRef = database.collection("pricePolicies").where("active", "==", true).limit(1);
        docRef
            .get()
            .then(activePricePolicy => {

                //if price exists, do calculation
                if (activePricePolicy.exists) {

                    //Calculate delivery cost
                    var currentDeliveryPrice = activePricePolicy.deliveryPrice * distanceInKm;
                    var currentDeliveryFee = activePricePolicy.deliveryFee * distanceInKm;

                    resolve({
                        cost: {
                            "price": currentDeliveryPrice,
                            "fee": currentDeliveryFee
                        }
                    });

                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * 
 * @param {*} userId 
 */
export function findCustomerDeliveries(userId) {

    return new Promise((resolve, reject) => {
        //Get user deliveries in collection 
        var docRef = database.collection("deliveries").where("customerId", "==", userId);
        docRef
            .get()
            .then(deliveriesList => {
                if (deliveriesList.exists) {
                    resolve(deliveriesList);
                }
            })
            .catch(error => {
                reject(error);
            });
    });


}

/**
 * 
 * @param {*} userId 
 * @param {*} callback 
 */
export function findDelivererDeliveries(userId) {
    return new Promise((resolve, reject) => {
        //Get user deliveries in collection 
        var docRef = database.collection("deliveries").where("delivererId", "==", userId);
        docRef
            .get()
            .then(deliveriesList => {
                if (deliveriesList.exists) {
                    resolve(deliveriesList);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}