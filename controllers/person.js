const personService = require("../service/person");

class PersonController {
    createPerson(req, res) {
        try {
            const id = personService.createPerson(req.body);
            res.status(201).json(id);
        }
        catch(err){
            console.error(err);
            res.status(500).send(false);
        }
    }
};

module.exports = new PersonController();