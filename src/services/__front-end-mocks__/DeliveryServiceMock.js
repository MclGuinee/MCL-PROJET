import geolib from 'geolib';
import firebase from 'firebase';


/**
 * Save a delivery order.
 * @param {*} delivery delivery to save
 */
export function saveDelivery(delivery) {
    return new Promise((resolve, reject) => {
        resolve({
            "deliveryId": {
                "startAddressName": "string",
                "endAddressName": "string",
                "startAddressLatitude": 47.082892,
                "startAddressLongitude": 2.396577999999977,
                "endAddressLatitude": 47.082892,
                "endAddressLongitude": 2.396577999999977,
                "distanceInKM": "30",
                "deliveryStartDateTime":new Date(),
                "customerId": "UID : refer to customerInformations collection",
                "status": "ORDERED/ACCEPTED_BY_DELIVER/DELIVERED/PAIED",
                "delivererId": "UID: refer to deliverInformations collection ",
                "deliveryPrice": 20000,
                "deliveryFee": 1000,
                "createDate": new Date(),
                "updateDate": new Date()
            }
        });

    });
}



/**
 * Calculate delivery cost
 * @param {*} delivery delevery to calculate cost
 */
export function calculateDeliveryCost(delivery) {

    return new Promise((resolve, reject) => {
        resolve({
            "cost": {
                "price": 20000,
                "fee": 500
            }
        });

    });
}

/**
 * 
 * @param {*} userId 
 */
export function findCustomerDeliveries(userId) {

    return new Promise((resolve, reject) => {
        resolve({
            "deliveryId": {
                "startAddressName": "string",
                "endAddressName": "string",
                "startAddressGeoPoint": new firebase.firestore.GeoPoint(47.082892, 2.396577999999977),
                "endAddressGeoPoint": new firebase.firestore.GeoPoint(47.082892, 2.396577999999977),
                "distanceInKM": "30",
                "deliveryStartDateTime": firebase.firestore.FieldValue.serverTimestamp(),
                "deliveryEndDateTime": firebase.firestore.FieldValue.serverTimestamp(),
                "customerId": "UID : refer to customerInformations collection",
                "status": "ORDERED/ACCEPTED_BY_DELIVER/DELIVERED/PAIED",
                "delivererId": "UID: refer to deliverInformations collection ",
                "deliveryPrice": 20000,
                "deliveryFee": 1000,
                "createDate": firebase.firestore.FieldValue.serverTimestamp(),
                "updateDate": firebase.firestore.FieldValue.serverTimestamp()
            }
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
        resolve({
            "deliveryId": {
                "startAddressName": "string",
                "endAddressName": "string",
                "startAddressGeoPoint": new firebase.firestore.GeoPoint(47.082892, 2.396577999999977),
                "endAddressGeoPoint": new firebase.firestore.GeoPoint(47.082892, 2.396577999999977),
                "distanceInKM": "30",
                "deliveryStartDateTime": firebase.firestore.FieldValue.serverTimestamp(),
                "deliveryEndDateTime": firebase.firestore.FieldValue.serverTimestamp(),
                "customerId": "UID : refer to customerInformations collection",
                "status": "ORDERED/ACCEPTED_BY_DELIVER/DELIVERED/PAIED",
                "delivererId": "UID: refer to deliverInformations collection ",
                "deliveryPrice": 20000,
                "deliveryFee": 1000,
                "createDate": firebase.firestore.FieldValue.serverTimestamp(),
                "updateDate": firebase.firestore.FieldValue.serverTimestamp()
            }
        });
    });
}