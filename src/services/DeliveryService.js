import {
    database
} from "../config/firebase-init";

import geolib from 'geolib';
import firebase from 'firebase';


/**
 * Save a delivery order.
 * @param {*} delivery delivery to save
 * @returns delivery id
 */
export function saveDelivery(delivery) {

    return new Promise((resolve, reject) => {

        //Calculate delivery distance    
        var distanceInMeters = geolib.getDistance({
            "latitude": delivery.startAddressLatitude,
            "longitude": delivery.startAddressLongitude
        }, {
            "latitude": delivery.endAddressLatitude,
            "longitude": delivery.endAddressLongitude
        });

        var distanceInKm = distanceInMeters / 1000;

        console.log("Distance entre les deux adresses est:", distanceInKm);

        //update delivery entity with others informations
        delivery.distanceInKm = distanceInKm;
        delivery.deliveryStartDateTime = firebase.firestore.Timestamp.fromDate(delivery.deliveryStartDateTime);
        delivery.createDate = firebase.firestore.FieldValue.serverTimestamp();
        delivery.updateDate = firebase.firestore.FieldValue.serverTimestamp();

        //Calculate delivery cost and save delevery in database
        calculateDeliveryCost(distanceInKm)
            .then(cost => {

                delivery.deliveryPrice = cost.deliveryPrice;
                delivery.deliveryFee = cost.deliveryFee;

                console.log("Le coût de livraison est :", delivery.deliveryPrice);
                console.log("Le frais de livraison est :", delivery.deliveryFee);

                //create delivery in firestore
                database.collection("deliveries")
                    .add(delivery)
                    .then(docRef => {
                        console.log("Delivery successfully written wih id :" + docRef.id);
                        resolve(docRef.id);
                    })
                    .catch(error => {
                        console.error("Error writing delivery: ", error);
                        reject(error);
                    });
            }).catch(error => {
                console.error("Error when calculating delivery cost: ", error);
                reject(error);
            });
    });
}


/**
 * Calculate delivery cost by distance 
 * @param {number} distanceInKm delivery distance.
 * @returns the delivery cost
 */
function calculateDeliveryCost(distanceInKm) {
    return new Promise((resolve, reject) => {

        //Get price policies
        let pricePoliciesRef = database.collection("pricePolicies").where("active", "==", true);

        pricePoliciesRef.get()
            .then(doc => {

                //if price exists, get price policy
                if (doc.exists) {

                    //Calculate delivery cost                        
                    let currentDeliveryPrice = doc.data().deliveryPrice * distanceInKm;
                    let currentDeliveryFee = doc.data().deliveryFee * distanceInKm;

                    console.log("currentDeliveryPrice:", currentDeliveryPrice);
                    resolve({
                        "deliveryPrice": currentDeliveryPrice,
                        "deliveryFee": currentDeliveryFee
                    });
                }
            }).catch(error => {
                console.error("Error getting document:", error);

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