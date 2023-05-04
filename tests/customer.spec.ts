import Customer from "../src/models/Customer";

import { assert } from "chai";

describe("Customer Test", () => {

    let customer : Customer;

    before(() => {
        customer = new Customer('Mickey', 'DisneyLand', 'mickey@disneyland.com');
    })


    it("he system should be able to store information on a new customer using valid data", () => {
        /**
         *  Scenario:
         *  1. Given I create a new customer named Mickey Mouse
         *  2. When I initialize the customer object with valid details.
         *  3. Then Mickey's information should be stored in the system.
         */
        assert.isNotNull(customer, 'Customer is not null');
        assert.equal(customer.getName(), 'Mickey', 'Name correct');
        assert.equal(customer.getAdress(), 'DisneyLand', 'Adress correct');
        assert.equal(customer.getEmail(), 'mickey@disneyland.com', 'Email Adress correct');
    });
});