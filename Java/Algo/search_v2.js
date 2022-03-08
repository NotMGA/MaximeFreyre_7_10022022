const recette = document.querySelectorAll("article");
// let ingredient_var = [];
let filter_recipe =[];

// document.querySelector(".btn").addEventListener("click" ,()=>{
    document.getElementById("search_bar").addEventListener("keyup",function(e){

        if (document.getElementById("search_bar").value.length >= 3 || document.getElementById("search_bar").value.length == 0)
        {
            const search_bar = document.getElementById("search_bar").value.toLowerCase();
                // console.log(filter_recipe);
            

            filter_recipe= recipes.filter(character =>{
               // console.log(character.ingredients[0].ingredient)
               const ingredient_var = [];
                let ingredient_var2= [];
                
                // for (let i=0, max =character.length;i<max ;i+=1){
                    for(let i=0 ; i< character.ingredients.length ;i++){
                               ingredient_var2 = ingredient_var2 +' '+ character.ingredients[i].ingredient;
                               }
                               var new_result ;
                    ingredient_var.push( character.name.toLocaleLowerCase()+' '  + character.appliance.toLocaleLowerCase()+ ' '+character.ustensils+ ' '+ingredient_var2.toLowerCase());
                    ingredient_var.map(function(current_recipe){
                    new_result = current_recipe.includes(search_bar);
                    })
                    console.log(ingredient_var)
                    // console.log(ingredient_var[0].includes(search_bar))
                    console.log(new_result)
                    return new_result ; 
                    // return[...ingredient_var.values()].includes(search_bar)
                    
                // }
                


            //    for(let i=0 ; i< character.ingredients.length ;i++){
            //        ingredient_var = ingredient_var + character.ingredients[i].ingredient;
            //        }
            //    return(character.name.toLowerCase().includes(search_bar) || character.appliance.toLowerCase().includes(search_bar) ||character.ustensils.includes(search_bar) || ingredient_var.includes(search_bar) || character.description.includes(search_bar) )
       })

        }


    // console.log(filter_recipe);
    clearData();
    filter_select();
    // displayData(selected_recipe);
    // displayData(filter_recipe);
    
})