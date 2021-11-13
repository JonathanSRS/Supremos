const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/industria-freios_db",{
        useNewUrlParser: true
    }
);

module.exports = mongoose;