const mongoose = require("mongoose");
require("dotenv").config();
const {Configs} = require('./index')
const reset = require("./reset")


async function connectToDatabase(log) {
    await mongoose.connect(Configs.databaseUrl).then(async () => {
        console.log(`Database Connection Successful: ${log || ""}`);
        await reset()
    }).catch((err) => {
        console.log("Database Connection Error");
        console.log(err);
    })
}
module.exports = {
    connectToDatabase
};