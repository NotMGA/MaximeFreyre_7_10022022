btn_ingre=document.getElementById("btn_ingre");
btn_ust =document.getElementById("btn_ust")
btn_app = document.getElementById("btn_app")
ingres = document.querySelector(".ingres ")
uste = document.querySelector(".ustensils")
app =document.querySelector(".app")
search_ingre = document.getElementById("search_ingre")
var click = true;
select_ingre(recipes);

//button for ingreds
btn_ingre.onclick = function(){
    if (click == true){
        ingres.style.display = "flex";
        document.querySelector("#selection_ingre").style.width = "50%"
        document.getElementById("search_ingre").disabled =true
        document.getElementById("search_ingre").placeholder ="Rechercher un ingrédient"
        clearDataIngre(ingres);
        clearDataIngre(uste)
        if(selected_recipe.length != [0])
        {
            select_ingre(selected_recipe);
            select_ust(selected_recipe)
        }

        else if (filter_recipe.length != [0]){
            select_ingre(filter_recipe);
            select_ust(filter_recipe)
        }

        else {
            select_ingre(recipes);
            select_ust(recipes)
        }
        // add click to all label 
        const add_ingre = document.querySelectorAll(".ingres > label")
        add_ingre.forEach((label)=>
        label.addEventListener("click",addelements_ingre)
        )
        // end 
        click = false;
        
    }
    else{
        ingres.style.display = "none";
        document.querySelector("#selection_ingre").style.width = "20%"
        document.getElementById("search_ingre").disabled =false
        document.getElementById("search_ingre").placeholder ="ingrédient"
        click = true;
        
    }

}

//btn for ustensil

btn_ust.onclick = function(){
    if (click == true){
        uste.style.display = "flex";
        document.querySelector("#selection_ust").style.width = "50%"
        document.getElementById("search_ust").disabled =true
        document.getElementById("search_ust").placeholder ="Rechercher un Ustensil"
        if(selected_recipe.length != [0])
        {
            select_ingre(selected_recipe);
            select_ust(selected_recipe)
        }

        else if (filter_recipe.length != [0]){
            select_ingre(filter_recipe);
            select_ust(filter_recipe)
        }

        else {
            select_ingre(recipes);
            select_ust(recipes)
        }
        // add click to all label 
        const add_ust = document.querySelectorAll(".ustensils > label")
        add_ust.forEach((label)=>
        label.addEventListener("click",addelements_ust)
        )
        // end 
        click = false;
    }
    else{
        uste.style.display = "none";
        document.querySelector("#selection_ust").style.width = "20%"
        document.getElementById("search_ust").disabled =false
        document.getElementById("search_ust").placeholder ="ustensils"
        clearDataIngre(uste);
        clearDataIngre(ingres);
        click = true;
    }

}

//btn for the appliance

btn_app.onclick = function(){
    if (click == true){
        app.style.display = "flex";
        document.querySelector("#selection_app").style.width = "50%"
        document.getElementById("search_app").disabled =true
        document.getElementById("search_app").placeholder ="Rechercher un Appareils"
        if(selected_recipe.length != [0])
        {
            select_ingre(selected_recipe);
            select_ust(selected_recipe);
            select_app(selected_recipe)
            
        }

        else if (filter_recipe.length != [0]){
            select_ingre(filter_recipe);
            select_ust(filter_recipe);
            select_app(filter_recipe);
        }

        else {
            select_ingre(recipes);
            select_ust(recipes);
            select_app(recipes);
        }
        // add click to all label 
        const add_app = document.querySelectorAll(".app > label")
        add_app.forEach((label)=>
        label.addEventListener("click",addelements_app)
        )
        // end 
        click = false;
    }
    else{
        app.style.display = "none";
        document.querySelector("#selection_app").style.width = "20%"
        document.getElementById("search_app").disabled =false
        document.getElementById("search_app").placeholder ="Appareils"
        clearDataIngre(uste);
        clearDataIngre(app);
        clearDataIngre(ingres);
        click = true;
    }

}

// function for the select : ust
function select_ust(recipes){
    const list_ustensils = document.querySelector(".ustensils");
    recipes.forEach((ingres) => {
        const {name , ingredients ,time ,description, ustensils } =ingres;
        
        ustensils.forEach(ust => {
            const ust_txt = document.createElement('label');
            ust_txt.textContent= ust;
            list_ustensils.appendChild(ust_txt)
        });
    });
}
// function for the ingredient
function select_ingre(recipes){
    const list_ingre = document.querySelector(".ingres");
    recipes.forEach((ingres) => {
        const {name , ingredients ,time ,description } =ingres;
        ingredients.forEach(ingre => {
            const {ingredient ,unit ,quantity}= ingre;
            const ingre_txt = document.createElement('label');
            ingre_txt.textContent= ingredient;
            list_ingre.appendChild(ingre_txt)
        });
    });
}

//function for the select : app

// function for the ingredient
function select_app(recipes){
    const list_app = document.querySelector(".app");
    recipes.forEach((ingres) => {
        const {name , ingredients ,time ,description , appliance } =ingres;
        const app_txt = document.createElement('label');
        app_txt.textContent= appliance;
        list_app.appendChild(app_txt)
    });
}

 // clear ingredient list
function clearDataIngre(ingres){
    while (ingres.children.length>0) {
        ingres.removeChild(ingres.lastChild)
        }
}

 //add elements ingredients up to the slect 


    const add_ingre = document.querySelectorAll(".ingres > label")
    add_ingre.forEach((label)=>
    label.addEventListener("click",addelements_ingre)
    )



// add elements ingre up to the select

function addelements_ingre(e){
    const elements_value = e.target.textContent
    const div_select_elem = document.createElement("div")
    const select_elem = document.createElement("label")
    const close = document.createElement("input")
    close.setAttribute("type", "image")
    close.setAttribute("src", "/image/close.svg")
    div_select_elem.setAttribute("class","blue selected")
    select_elem.innerHTML= elements_value;
    select_elem.setAttribute("class","label_ingre")
    document.querySelector(".select_selection").appendChild(div_select_elem)
    div_select_elem.appendChild(select_elem)
    div_select_elem.appendChild(close);
    // delete the select creeat
    const close_ingre = document.querySelectorAll(".selected > input")
    filter_selet();
    close_ingre.forEach((close)=>
    close.addEventListener("click" ,function(e){
        e.target.parentNode.remove();
    filter_selet();

    })
    )
    // console.log(e.target.textContent)
} 

// add elements ust up to the select

function addelements_ust(e){
    const elements_value = e.target.textContent
    const div_select_elem = document.createElement("div")
    const select_elem = document.createElement("label")
    const close = document.createElement("input")
    close.setAttribute("type", "image")
    close.setAttribute("src", "/image/close.svg")
    div_select_elem.setAttribute("class","selected red")
    select_elem.innerHTML= elements_value;
    select_elem.setAttribute("class","label_ust")
    document.querySelector(".select_selection").appendChild(div_select_elem)
    div_select_elem.appendChild(select_elem)
    div_select_elem.appendChild(close);
    // delete the select creeat
    const close_ingre = document.querySelectorAll(".selected > input")
    filter_selet();
    close_ingre.forEach((close)=>
    close.addEventListener("click" ,function(e){
        e.target.parentNode.remove();
        
        filter_selet();
            

    })
    )
    // console.log(e.target.textContent)
} 

//add elements app up to the select

function addelements_app(e){
    const elements_value = e.target.textContent
    const div_select_elem = document.createElement("div")
    const select_elem = document.createElement("label")
    const close = document.createElement("input")
    close.setAttribute("type", "image")
    close.setAttribute("src", "/image/close.svg")
    div_select_elem.setAttribute("class","selected green")
    select_elem.innerHTML= elements_value;
    select_elem.setAttribute("class","label_app")
    document.querySelector(".select_selection").appendChild(div_select_elem)
    div_select_elem.appendChild(select_elem)
    div_select_elem.appendChild(close);
    // delete the select creeat
    const close_ingre = document.querySelectorAll(".selected > input")
    filter_selet();
    close_ingre.forEach((close)=>
    close.addEventListener("click" ,function(e){
        e.target.parentNode.remove();
        
        filter_selet();
            

    })
    )
    // console.log(e.target.textContent)
} 

// filter with the select 

let selected_recipe = [];
function filter_selet(tab_select){
    const elements_selected_ing = document.querySelectorAll(".label_ingre")
    const elements_selected_ust = document.querySelectorAll(".label_ust")
    const elements_selected_app = document.querySelectorAll(".label_app")
    console.log(filter_recipe.length)
    console.log(filter_recipe)
    tab_select = filter_recipe
    if (tab_select.length == 0)
    {
        tab_select = recipes;
    }

    // const recette = document.querySelectorAll("article");
    
        
        
        selected_recipe= tab_select.filter(selected =>{
            let ingredient_var =[];
            let verif_ing = false;
            let verif_ust = false;
            let verif_app = false;
            
            for(let i=0 ; i< selected.ingredients.length ;i++){
                ingredient_var = ingredient_var + selected.ingredients[i].ingredient;
                }
                // console.log(ingredient_var)
                // console.log(elements_selected.length);
                for(let i=0; i< elements_selected_ing.length  ;i++){
                    // console.log(document.querySelectorAll(""))
                    
                    // var selected_ing= elements_selected[i].textContent
                    verif_ing = ingredient_var.toLowerCase().includes(elements_selected_ing[i].textContent.toLowerCase())
                    
                    
                    
                    if(verif_ing == false)
                    {
                        console.log("false ing")
                        return false
                    }
                    
                    
                }
                for(let i=0; i< elements_selected_ust.length  ;i++){
                    // console.log(document.querySelectorAll(""))
                    
                    // var selected_ing= elements_selected[i].textContent
                    console.log(elements_selected_ust.length)
                    
                    verif_ust = selected.ustensils.includes(elements_selected_ust[i].textContent.toLowerCase())
                    console.log(verif_ust)
                    
                    if(verif_ust == false)
                    {
                        console.log("false ust")
                        return false
                    }
                    
                    
                }
                for(let i=0; i< elements_selected_app.length  ;i++){
                    // console.log(document.querySelectorAll(""))
                    
                    // var selected_ing= elements_selected[i].textContent
                    console.log(elements_selected_app.length)
                    
                    verif_app = selected.appliance.toLowerCase().includes(elements_selected_app[i].textContent.toLowerCase())
                    console.log(verif_app)
                    
                    if(verif_app == false)
                    {
                        console.log("false app")
                        return false
                    }
                    
                    
                }
                console.log("true")
                return true 
                // return
                // console.log(elements_selected_txt)
                // return (ingredient_var.toLowerCase().includes(elements_selected_txt.toLowerCase()))
        })
        
    
        console.log(selected_recipe)
    clearData();
    displayData(selected_recipe);

}

// function search of the select 

search_ingre.addEventListener("keyup",function(e){
    ingres.style.display = "flex";
    // console.log(document.querySelectorAll(".ingres > label"))
    
},false);