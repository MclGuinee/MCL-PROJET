import * as customerService from '../CustomerService';

test("Add customer address", () => {
	//given	
	const address = {
		"addressName": "kaloum",
		"latitude": 9.514809,
		"longitude": -13.707559
	};

	const userId = "useruid-test";


	//when
	expect.assertions(1);

	return customerService.saveCustomerAddress(userId, address).then(addressId =>
		expect(addressId).toBeDefined()
	);

});


test("Find customer addresses", () => {
	//given	
	const userId = "useruid-test";

	//when
	expect.assertions(1);

	return customerService.findCustomerAddresses(userId)
		.then(addresses => {
			expect(addresses.length).toEqual(1);
		});

});