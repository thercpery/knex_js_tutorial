// DAO - Data access object
/* 
    DAO - it's function is to abstract the database access.
*/

const db = require("../db/db");

class PersonDAO {
    async createPerson(firstName, lastName, email){
        const [id] = await db("person").insert({
            email,
            first_name: firstName,
            last_name: lastName
        })
            .returning("id");

        return id;
    }
};

module.exports = new PersonDAO();