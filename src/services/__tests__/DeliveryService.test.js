import firebase from 'firebase';

import * as deliveryService from '../DeliveryService';


test('Add delivery', () => {
	//given	
	const delivery = {
		"startAddressName": "string",
		"endAddressName": "string",
		"startAddressLatitude": 9.514809,
		"startAddressLongitude": -13.707559,
		"endAddressLatitude": 9.5274,
		"endAddressLongitude": -13.684193,
		"deliveryStartDateTime": new Date(),
		"customerId": "UID : refer to customerInformations collection",
		"status": "ORDERED/ACCEPTED_BY_DELIVER/DELIVERED/PAIED",
		"delivererId": "UID: refer to deliverInformations collection ",
	};

	//when
	expect.assertions(1);

	return deliveryService.saveDelivery(delivery).then(deliveryId =>
		expect(deliveryId).toBeDefined()
	);

});

