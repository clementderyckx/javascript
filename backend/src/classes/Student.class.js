import { Person } from "./Person.class.js";
import { PersonEntity } from "../entities/PersonEntity.entity.js";

export class Student extends Person {
    /**
     * 
     * @param {PersonEntity} person 
     */
    constructor(person){
        super(person)
        this.grades = []
    }
}