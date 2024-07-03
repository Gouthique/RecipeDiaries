const router = require("express").Router();
const RecipeModel = require("../models/Recipes");


router.post("/createRecipe", async (req, res) => {
    RecipeModel.create(req.body)
    .then((recipes) => req.json(recipes))
    .catch((err) => res.json(err));
}    
)

router.get("/getRecipes", async (req, res) => {
    RecipeModel.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => res.json(err));
}
)

router.get("/getRecipe/:id", async (req, res) => {
    const id = req.params.id;
    RecipeModel.findById({_id:id})
    .then((recipes) => res.json(recipes))
    .catch((err) => res.json(err));
}
)

router.put("/updateRecipe/:id", async (req, res) => {
    const id = req.params.id;
    RecipeModel.findByIdAndUpdate ({_id:id}, {
        name: req.body.name,
        preptime: req.body.preptime,
        cooktime: req.body.cooktime,
        servings: req.body.servings,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    })
    .then((recipes) => res.json(recipes))
    .catch((err) => res.json(err));
    }
    )
   
router.delete("/deleteRecipe/:id", async (req, res) => {
    const id = req.params.id;
    RecipeModel.findByIdAndDelete({_id:id})
    .then((recipes) => res.json(recipes))
    .catch((err) => res.json(err));
    }
    )


module.exports = router;
