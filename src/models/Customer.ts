export default class Customer {

    private name: String;
    private adress: String;
    private email: String;

    constructor(name: String, adress: String, email: String){

        this.name = name;
        this.adress = adress;
        this.email = email;

    }

    // Getters

    public getName(): String {
        return this.name
    }

    public getAdress(): String {
        return this.adress
    }

    public getEmail(): String {
        return this.email
    }

    // Setters

    public updateName(name: String){
        this.name = name;
    }

    public updateAdress(adress: String){
        this.adress = adress;
    }

    public updateEmail(email: String){
        this.email = email
    }



}