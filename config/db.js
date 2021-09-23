const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.BD_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connect DB")
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;