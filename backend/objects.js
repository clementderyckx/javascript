import { PersonEntity } from "./src/entities/PersonEntity.entity.js"
import { Student } from "./src/classes/Student.class.js"
const user = {
    firstname: "clement",
    lastname: "kangni",
    getName: (fs) => {
        return `${fs}`
    }
}



const student = new Student(
    new PersonEntity("clement", "kangni")
)
console.log(student)