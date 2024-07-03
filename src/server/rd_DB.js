const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    mongoose.connect('mongodb://localhost:27017/RecipeDiaries', connectionParams)
        .then(() => {
            console.log("Connected to database successfully");
        })
        .catch((error) => {
            console.error("Could not connect to the database!", error);
        });
};
