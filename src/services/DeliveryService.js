/**
 * Save a delivery order.
 * @param {*} delivery delivery collection @see ../../databaseStructure/deliveries.json
 */
export function saveDelivery(delivery,callback) {
    //do nothing
}


/**
 * 
 * @param {*} delivery delevery to calculate cost
 */
export function calculateDeliveryCost(delivery, callback) {

    //return JSON.stringify(deliveryData);
    return {
        price: {
            cost: 2000,
            fee: 1000
        }
    };
}


export function findCustomerDeliveries(userId, callback) {
    return {
        "deliveries": {
            "delivery1-generatedid": {
                "startAddressName": "string",
                "endAddressName": "string",
                "startAddressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "endAddressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "distanceInKM": "30",
                "deliveryStartDateTime": "firebase.firestore.FieldValue.serverTimestamp()",
                "deliveryEndDateTime": "firebase.firestore.FieldValue.serverTimestamp()",
                "customerInformationId": "UID : refer to customerInformations collection",
                "status": "ORDERED/ACCEPTED_BY_DELIVER/DELIVERED/PAIED",
                "delivererInformationId": "UID: refer to deliverInformations collection ",
                "deliveryPrice": 20000,
                "deliveryFee": 1000,
                "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
                "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
            },
            "delivery2-generatedid": {
                "startAddress": "string",
                "endAddress": "string",
                "startAddressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "endAddressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "distanceInKM": "30",
                "deliveryStartDateTime": "firebase.firestore.FieldValue.serverTimestamp()",
                "deliveryEndDateTime": "firebase.firestore.FieldValue.serverTimestamp()",
                "customerInformationId": "UID : refer to customerInformations collection",
                "status": "DELIVERED",
                "delivererInformationId": "UID: refer to deliverInformations collection ",
                "deliveryPrice": 20000,
                "deliveryFee": 1000,
                "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
                "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
            }
        }
    };
}

export function findDeliverDeliveries(userId, callback) {
    return {
        "deliveries": {
            "delivery1-generatedid": {
                "startAddressName": "string",
                "endAddressName": "string",
                "startAddressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "endAddressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "distanceInKM": "30",
                "deliveryStartDateTime": "firebase.firestore.FieldValue.serverTimestamp()",
                "deliveryEndDateTime": "firebase.firestore.FieldValue.serverTimestamp()",
                "customerInformationId": "UID : refer to customerInformations collection",
                "status": "ORDERED/ACCEPTED_BY_DELIVER/DELIVERED/PAIED",
                "delivererInformationId": "UID: refer to deliverInformations collection ",
                "deliveryPrice": 20000,
                "deliveryFee": 1000,
                "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
                "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
            },
            "delivery2-generatedid": {
                "startAddress": "string",
                "endAddress": "string",
                "startAddressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "endAddressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "distanceInKM": "30",
                "deliveryStartDateTime": "firebase.firestore.FieldValue.serverTimestamp()",
                "deliveryEndDateTime": "firebase.firestore.FieldValue.serverTimestamp()",
                "customerInformationId": "UID : refer to customerInformations collection",
                "status": "DELIVERED",
                "delivererInformationId": "UID: refer to deliverInformations collection ",
                "deliveryPrice": 20000,
                "deliveryFee": 1000,
                "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
                "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
            }
        }
    };
}