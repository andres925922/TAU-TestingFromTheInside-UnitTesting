import Customer from "../src/models/Customer";

import { assert } from "chai";

describe("Customer Test", () => {

    let customer : Customer;

    beforeEach(() => {
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
    
    it("The system should be able to update customer information using valid data.", () => {
        /**
         *  The system should be able to update customer information using valid data.
         *  Scenario:
         *  1. Given I create a new customer named Mickey Mouse.
         *  2. When I update Mickey's customer information with Minnie's information.
         *  3. Then Minnie's information should be stored in the system.
         */

        // When
        customer.updateName('Minnie Mouse');
        customer.updateAdress('Disney World');
        customer.updateEmail('minnie@disneyworld.com');

        // Then
        assert.equal(customer.getName(), 'Minnie Mouse', 'Name changed correctly');
        assert.equal(customer.getAdress(), 'Disney World', 'Addres changed correctly');
        assert.equal(customer.getEmail(), 'minnie@disneyworld.com', 'Mail changed correctly');


    });
});