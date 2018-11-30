import {
	database
} from "../config/firebase-init";

/**
 * Find user bank account
 * @param {*} userId 
 */
export function findUserBankAccount(userId) {
	return new Promise((resolve, reject) => {
		var docRef = database.collection("mobileBankAccount").where("customerId", "==", userId);
		docRef
			.get()
			.then(bankAccount => {
				if (bankAccount.exists) {
					resolve(v);
				}
			})
			.catch(error => {
				reject(error);
			});
	});
}

/**
 * add a payment in database
 * @param {*} payment 
 */
export function addPayment(payment) {
	return new Promise((resolve, reject) => {

		payment.createDate = firebase.firestore.FieldValue.serverTimestamp();
		payment.updateDate = firebase.firestore.FieldValue.serverTimestamp();

		//Get collection
		var payments = database.collection("payments");

		//create empty doc with generate id
		var newDocRef = deliveries.doc();

		//add delivery to doc
		newDocRef.set(payment, {
				merge: false
			})
			.then(paymentAdded => {
				console.log("Payment successfully written wih id :" + paymentAdded.id);
				resolve(paymentAdded);
			})
			.catch(error => {
				console.error("Error writing delivery: ", error);
				reject(error);

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