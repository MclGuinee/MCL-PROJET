import firebase from 'firebase';

/**
 * Find customer by id
 * @param {*} userId  customer id
 */
export function findCustomer(userId) {
    return new Promise((resolve, reject) => {
        resolve({
            "customerId": {
                "firstname": "string",
                "lastname": "string",
                "phone": 0,
                "createDate": firebase.firestore.FieldValue.serverTimestamp(),
                "updateDate": firebase.firestore.FieldValue.serverTimestamp()
            }
        });
    });
}

/**
 * Find customer preffered addresses
 * @param {*} userId 
 */
export function findCustomerAddresses(userId) {

    return new Promise((resolve, reject) => {
        resolve({
            "customerId": [{
                "addressName": "string",
                "addressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "createDate": firebase.firestore.FieldValue.serverTimestamp(),
                "updateDate": firebase.firestore.FieldValue.serverTimestamp()
            }, {
                "addressName": "string",
                "addressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "createDate": firebase.firestore.FieldValue.serverTimestamp(),
                "updateDate": firebase.firestore.FieldValue.serverTimestamp()
            }, {
                "addressName": "string",
                "addressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "createDate": firebase.firestore.FieldValue.serverTimestamp(),
                "updateDate": firebase.firestore.FieldValue.serverTimestamp()

            }]
        });


    });

}

/**
 * Add a customer preffered address
 * @param {*} addresse 
 */
export function saveCustomerAdresse(address) {
    return new Promise((resolve, reject) => {
        resolve();
    });
}