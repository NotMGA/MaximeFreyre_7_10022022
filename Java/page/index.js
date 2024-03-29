recipe_section = document.querySelector(".recipe_section");
async function displayData(recipes) 
{
    const recipeSection = document.querySelector(".recipe_section");

    recipes.forEach((recettes) => {
        const recipeModel = displayrecette(recettes);
        const recipeCardDOM = recipeModel.getrecetteDOM();
        recipeSection.appendChild(recipeCardDOM);
    });
};

async function clearData(){
    while (recipe_section.children.length>0) {
        recipe_section.removeChild(recipe_section.lastChild)
        }
}

async function init() {
    displayData(recipes);
};
init();