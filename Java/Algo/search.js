const recette = document.querySelectorAll("article");
// let ingredient_var = [];
let filter_recipe =[];
// document.querySelector(".btn").addEventListener("click" ,()=>{
    document.getElementById("search_bar").addEventListener("keyup",function(e){
        if (document.getElementById("search_bar").value.length >= 3 || document.getElementById("search_bar").value.length == 0 )
        {
            const search_bar = document.getElementById("search_bar").value.toLowerCase();
            filter_recipe= recipes.filter(character =>{
               // console.log(character.ingredients[0].ingredient)
               ingredient_var = [];
               for(let i=0 ; i< character.ingredients.length ;i++){
                   ingredient_var = ingredient_var + character.ingredients[i].ingredient;
                   }
               return(character.name.toLowerCase().includes(search_bar) || character.appliance.toLowerCase().includes(search_bar) ||character.ustensils.includes(search_bar) || ingredient_var.includes(search_bar) || character.description.includes(search_bar) )
       })
        }


    // console.log(filter_recipe);
    clearData();
    filter_select();
    // displayData(selected_recipe);
    // displayData(filter_recipe);
    
})
