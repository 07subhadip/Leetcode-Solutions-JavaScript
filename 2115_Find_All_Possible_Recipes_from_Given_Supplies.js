/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
    const recipeToIngredients = new Map();
    for (let i = 0; i < recipes.length; i++) {
        recipeToIngredients.set(recipes[i], ingredients[i]);
    }

    const have = new Set(supplies);
    const madeRecipes = [];
    const recipesToTry = new Set(recipes);

    while (recipesToTry.size > 0) {
        let madeSomethingInThisPass = false;
        const recipesMadeInThisPass = new Set();

        for (const recipeName of recipesToTry) {
            if (have.has(recipeName)) {
                continue;
            }
            const requiredIngredients = recipeToIngredients.get(recipeName);
            let canMake = true;
            for (const ingredient of requiredIngredients) {
                if (!have.has(ingredient)) {
                    canMake = false;
                    break;
                }
            }
            if (canMake) {
                have.add(recipeName);
                madeRecipes.push(recipeName);
                recipesMadeInThisPass.add(recipeName);
                madeSomethingInThisPass = true;
            }
        }

        if (!madeSomethingInThisPass) {
            break;
        }

        for (const recipe of recipesMadeInThisPass) {
            recipesToTry.delete(recipe);
        }
    }

    return madeRecipes;
};