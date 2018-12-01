import firebase from 'firebase';

import * as deliveryService from '../DeliveryService';

// /{saveDelivery,calculateDeliveryCost,findCustomerDeliveries}

describe('Test du service Deliveries', () => {
	it('Add delivery', () => {
		//given	
		const delivery = {
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
		};


		//when
		expect.assertions(1);

		deliveryService.saveDelivery(delivery).then(
			addedDelivery => {

				//then
				expect(addedDelivery.id).toBeDefined();
			});
	});
});