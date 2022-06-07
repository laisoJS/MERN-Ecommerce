const mongoose = require("mongoose");

module.exports = {
    init: () => {
        const mongOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false, // Don't build indexes
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6
        };
        mongoose.connect(process.env.ATLAS_URI, mongOptions);
        mongoose.Promise = global.Promise;
        mongoose.connection.on("connected", () =>
            console.log("Successfuly connected to Mongoose")
        );
    }
}