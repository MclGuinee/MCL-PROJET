import {
    database
} from "../config/firebase-init";
import firebase from 'firebase';

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
        var docRef = database.collection("custumerAddresses").doc(userId);

        docRef
            .get()
            .then(addresseList => {

                if (addresseList.exists) {
                    resolve(Object.values(addresseList.data()));
                }
            })
            .catch(error => {
                reject(error);
            });
    });

}

/**
 * Add a customer preffered address
 * @param {*} newAddress the customer address
 * @param {*} userId the user uid
 */
export function saveCustomerAddress(userId, newAddress) {
    return new Promise((resolve, reject) => {

        //Get customer addresses array
        var docRef = database.collection("custumerAddresses").doc(userId);

        //var exists;
        docRef.get().then(customerAddresses => {
            //exists=customerAddresses.exists;

            if (customerAddresses.exists) {
                //update it
                docRef.update({
                    addresses: firebase.firestore.FieldValue.arrayUnion(newAddress)
                });
            } else {
                //Create it
                let newAddresses = [];
                newAddresses.push(newAddress);
                docRef.set({
                    addresses: newAddresses
                });
            }
        });


        //Add new address to database


    });
}