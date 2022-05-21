const { DATABASE_URL } = process.env
const mongoose = require('mongoose') 
const repo = require('./repo')

exports.connect = () => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((x) => 
    {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        // INIT DATABASE
        repo.init();
        
    })
    .catch((err) => {
        console.log("Database connection failed. Exiting now")
        process.exit(1)
    });
};