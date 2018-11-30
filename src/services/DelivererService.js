import {
    database
} from "../config/firebase-init";

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
