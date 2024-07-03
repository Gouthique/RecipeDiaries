require("dotenv").config({ path: "../.env" });
const express = require('express');
const cors = require('cors');
const connection = require("./rd_DB");
const authRoutes = require("./Routes/authRoutes");

//const RecipeModel = require("./models/Recipes");
const recipeRoutes = require("./Routes/recipeRoutes");
const path = require("path");
const app = express();

//db Connection
connection();

//Middleware
app.use(express.json());
app.use(cors());


// // Routes

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





