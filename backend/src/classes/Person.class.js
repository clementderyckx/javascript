import { PersonEntity } from "../entities/PersonEntity.entity.js";


export class Person {

    /**
     * @param {PersonEntity} person 
     */
    constructor(person)  {
        this.person = person;
        this.fullname = this.getFullname();
    }

    getFullname(){
        return `${this.person.firstname} ${this.person.lastname}`
    }

    logFullname(){
        console.log(this.getFullname())
    }

    setFirstname(firstname){
        this.firstname = firstname;
        this.updateFullname();
    }

    updateFullname(){
        this.fullname = this.getFullname();
    }

    getFirstname(){
        return this.firstname
    }

}