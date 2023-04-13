const mongoose = require('mongoose');

const createConnection = () => {
    return mongoose.connect("mongodb://localhost:27017/EmployeesDB", { useNewUrlParser: true })
}

module.exports = createConnection;

