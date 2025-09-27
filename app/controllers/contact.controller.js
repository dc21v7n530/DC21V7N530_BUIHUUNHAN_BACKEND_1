// Create and Save a new Contact
exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

// Retrieve all Contacts from the database
exports.findALL = (req, res) => {
    res.send({ message: "findAll handler" });
};

// Find a single Contact with an id
exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

// Update a Contact by the id in the request
exports.update = (req, res) => {
    res.send({ message: "update handler" });
};

// Delete a Contact with the specified id in the request
exports.delete = (req, res) => {
    res.send({ message: "delete handler" });
};

// Delete all Contacts from the database
exports.deleteALL = (req, res) => {
    res.send({ message: "deleteAll handler" });
};

// Find all favorite Contacts
exports.findALLFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler" });
};
