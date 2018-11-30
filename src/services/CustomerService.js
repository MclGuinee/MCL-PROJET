import {
    database
} from "../config/firebase-init";

/**
 * Find customer by id
 * @param {*} userId  customer id
 */
export function findCustomer(userId) {
    return new Promise((resolve, reject) => {
        var docRef = database.collection("customers").where("customerId", "==", userId);
        docRef
            .get()
            .then(customer => {
                if (customer.exists) {
                    resolve(customer);
                }
            })
            .catch(error => {
                reject(error);
            });
    });

}

/**
 * Find customer preffered addresses
 * @param {*} userId 
 */
export function findCustomerAddresses(userId) {

    return new Promise((resolve, reject) => {

        //ge customer adresses collection to find selected user addresses
        var docRef = database.collection("custumerAddresses").where("customerId", "==", userId);

        docRef
            .get()
            .then(addresseList => {
                if (addresseList.exists) {
                    resolve(addresseList);
                }
            })
            .catch(error => {
                reject(error);
            });
    });

}

/**
 * Add a customer preffered address
 * @param {*} addresse 
 */
export function saveCustomerAdresse(address) {
    return new Promise((resolve, reject) => {

        delivery.createDate = firebase.firestore.FieldValue.serverTimestamp();
        delivery.updateDate = firebase.firestore.FieldValue.serverTimestamp();

        //Get collection
        var custumerAddresses = database.collection("custumerAddresses");

        //create empty doc with generate id
        var newDocRef = custumerAddresses.doc();

        //add delivery to doc
        newDocRef.set(delivery, {
                merge: false
            })
            .then(addedAddress => {
                console.log("Address successfully written wih id :" + addedAddress.id);
                resolve(addedAddress);
            })
            .catch(error => {
                console.error("Error writing delivery: ", error);
                reject(error);

            });
    });
}
