const { DATABASE_URL } = process.env
const mongoose = require('mongoose') 

exports.connect = () => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => 
    {
        console.log("Successfully connected to database");
    })
    .catch((err) => {
        console.log("Database connection failed. Exiting now")
        process.exit(1)
    });
};