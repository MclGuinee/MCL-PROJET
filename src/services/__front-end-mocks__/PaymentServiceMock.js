/**
 * Find user bank account
 * @param {*} userId 
 */
export function findUserBankAccount(userId) {
	return new Promise((resolve, reject) => {
		resolve({
			"customerId": {
				"bankNumber": "string : orange phone or other paiement mode",
				"customerLastnameAtBank": "string",
				"customerFirstnameAtBank": "string",
				"bankName": "Orange monney"
			}
		});

	});
}

/**
 * add a payment in database
 * @param {*} payment 
 */
export function addPayment(payment) {
	return new Promise((resolve, reject) => {

		resolve({
			"paymentId": {
				"deliveryId": "string: uid refer to deliveries collection",
				"deliveryCost": 2000,
				"deliveryFee": 1000,
				"customerId": "string: uid refer to customer collection",
				"mobileBankAccountId": "UID : refer to mobleBankAccount collection",
				"paymentStatus": "PAIED/REFUSED",
				"createDate": "firebase.firestore.FieldValue.serverTimestamp()",
				"updateDate": "firebase.firestore.FieldValue.serverTimestamp()"
			}
		});

	});
}

/**
 * Call bank for transaction
 * @param {*} payment 
 */
export function bankTransaction(payment) {
	return new Promise((resolve, reject) => {
		resolve();
	});

}