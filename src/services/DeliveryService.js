import deliveryData from '../../databaseStructure/deliveries.json';


/**
 * Save customer journey
 * @param {*} journey journey information @see 'databaseStructure/deliveries.json'
 *  */
export function saveDeliveryJourney(journey) {
    return "ok";
}

/**
 * Find a address in addresses repository
 * @param {*} address 
 */
export function findAddress(address) {
    return new Promise((resolve, reject) => {
        resolve({
            "adress": ['donka', 'landreah']
        });
    });

}

/**
 * Get journey cost
 * @param {*} journey 
 */
export function findJourneyCost(journey) {
    return JSON.stringify(deliveryData);
}