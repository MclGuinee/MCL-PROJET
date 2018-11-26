export function findCustomer(userId) {
    return {
        "customer-generated-id-1": {
            "firstname": "string",
            "lastname": "string",
            "phone": 0,
            "userId": "UID : refer to firebase authentication table",
            "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
            "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
        }
    };

}


export function findDeliver(userId) {
    return {
        "deliver-generated-id-1": {
            "firstname": "string",
            "lastname": "string",
            "phone": 0,
            "motorBikeRegistration": 12345,
            "userId": "UID : refer to firebase authentication table",
            "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
            "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
        }
    };

}


export function findUserAddresses(userId) {
    return {
        "custumerAddresses": {
            "customer-generated-id-1": [{
                "addressName": "string",
                "addressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
                "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
            }, {
                "addressName": "string",
                "addressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
                "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
            }, {
                "addressName": "string",
                "addressGeoPoint": "new firebase.firestore.GeoPoint(latitude, longitude)",
                "createDate": "firebase.firestore.FieldValue.serverTimestamp()",
                "updateDate": "firebase.firestore.FieldValue.serverTimestamp()"

            }]
        };

    }


}