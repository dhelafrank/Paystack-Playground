const mongoose = require("mongoose");
require("dotenv").config();
const {Configs} = require('./index')


async function connectToDatabase(log) {
    await mongoose.connect(Configs.databaseUrl).then(() => {
        console.log(`Database Connection Successful: ${log || ""}`);
    }).catch((err) => {
        console.log("Database Connection Error");
        console.log(err);
    })
}
module.exports = {
    connectToDatabase
};