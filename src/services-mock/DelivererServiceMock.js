

/**
 * Find deliverer by id
 * @param {*} userId 
 */
export function findDeliverer(userId) {
    return new Promise((resolve, reject) => {

        resolve({
            "delivererId": {
                "firstname": "string",
                "lastname": "string",
                "phone": 0,
                "motorBikeRegistration": 12345,
                "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
                "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
            }
        });

    });
}