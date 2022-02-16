const recette = document.querySelectorAll("article");
let ingredient_var = [];
document.querySelector(".btn").addEventListener("click" ,()=>{
    const search_bar = document.getElementById("search_bar").value.toLowerCase();
    const filter_recipe= recipes.filter(character =>{
        // console.log(character.ingredients[0].ingredient)
        ingredient_var = [];
        for(let i=0 ; i< character.ingredients.length ;i++){
            ingredient_var = ingredient_var + character.ingredients[i].ingredient;
            }
        console.log(ingredient_var)
        return(character.name.toLowerCase().includes(search_bar) || character.appliance.toLowerCase().includes(search_bar) ||character.ustensils.includes(search_bar) || ingredient_var.includes(search_bar)  )
})
    console.log(filter_recipe);
    clearData();
    displayData(filter_recipe);
})
