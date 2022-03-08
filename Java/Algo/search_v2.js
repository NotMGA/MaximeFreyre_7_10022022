const recette = document.querySelectorAll("article");
let filter_recipe =[];
    document.getElementById("search_bar").addEventListener("keyup",function(e){

        if (document.getElementById("search_bar").value.length >= 3 || document.getElementById("search_bar").value.length == 0)
        {
            const search_bar = document.getElementById("search_bar").value.toLowerCase();
            filter_recipe= recipes.filter(character =>{
               const ingredient_var = [];
                let ingredient_var2= [];
                    for(let i=0 ; i< character.ingredients.length ;i++){
                               ingredient_var2 = ingredient_var2 +' '+ character.ingredients[i].ingredient;
                               }
                               var new_result ;
                    ingredient_var.push( character.name.toLocaleLowerCase()+' '  + character.appliance.toLocaleLowerCase()+ ' '+character.ustensils+ ' '+ingredient_var2.toLowerCase());
                    ingredient_var.map(function(current_recipe){
                    new_result = current_recipe.includes(search_bar);
                    })
                    return new_result ; 
       })
       //display message if they are no recipe for the search bar 
       if (filter_recipe.length == 0){
           document.querySelector(".msg_vide").style.display = "flex";
       }
       else{
        document.querySelector(".msg_vide").style.display = "none";
        }
        }
    clearData();
    filter_select();
})