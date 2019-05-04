import {
    database
} from "../config/firebase-init";
import firebase from 'firebase';
import geolib from 'geolib';


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
        var cost = calculateDeliveryCost(distanceInKm);

        console.log("This delivery cost is:" + cost);

        if (cost.deliveryPrice !== null && cost.deliveryFee !== null) {
            delivery.deliveryPrice = cost.deliveryPrice;
            delivery.deliveryFee = cost.deliveryFee;

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
        }
    });
}


/**
 * Calculate delivery cost by distance 
 * @param {number} distanceInKm delivery distance.
 * @returns the delivery cost
 */
function calculateDeliveryCost(distanceInKm) {

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
                let cost = {
                    "deliveryPrice": currentDeliveryPrice,
                    "deliveryFee": currentDeliveryFee
                };

                return cost;
            }
        }).catch(error => {
            console.error("Error getting document:", error);

            return error;
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

/**
 * Find deliverer by id
 * @param {*} userId 
 */
export function findDeliverer(userId) {
    return new Promise((resolve, reject) => {

        //get deliverer collection to find the selected deliverer
        var docRef = database.collection("deliverers").where("delivererId", "==", userId);
        docRef
            .get()
            .then(deliverer => {
                if (deliverer.exists) {
                    resolve(deliverer);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}
