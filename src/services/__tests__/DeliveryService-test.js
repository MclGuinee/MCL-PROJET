import {saveDelivery,calculateDeliveryCost,findCustomerDeliveries} from '../DeliveryService';

describe('Test du service Deliveries', () => {
	it('Add delivery', () => {
		expect(saveDelivery(null)).toBeUndefined();
	});
});