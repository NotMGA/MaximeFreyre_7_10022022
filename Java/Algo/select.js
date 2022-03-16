btn_ingre=document.getElementById("btn_ingre");
btn_ust =document.getElementById("btn_ust")
btn_app = document.getElementById("btn_app")
ingres = document.querySelector(".ingres ")
uste = document.querySelector(".ustensils")
app =document.querySelector(".app")
search_ingre = document.getElementById("search_ingre")
search_ust = document.getElementById("search_ust")
search_app = document.getElementById("search_app")
var click_ingre = true;
var click_ust = true;
var click_app = true;
let selected_recipe = [];
select_ingre(recipes);
select_ust(recipes);
select_ust(recipes)
filter_select(recipes)

//button for ingreds
btn_ingre.onclick = function(){
    // check if 1 or 2 input for the button  
    if (click_ingre == true){
        ingres.style.display = "flex";
        document.querySelector("#selection_ingre").style.width = "50%"
        document.getElementById("search_ingre").disabled =true
        document.getElementById("search_ingre").placeholder ="Rechercher un ingrédient"
        btn_ingre.src="image/up_select.svg"
        clearDataIngre(ingres);
        clearDataIngre(uste)
        // use the good array
        if(selected_recipe.length != [0])
        {
            select_ingre(selected_recipe);
        }

        else if (filter_recipe.length != [0]){
            select_ingre(filter_recipe);
        }

        else {
            select_ingre(recipes);
        }
        // add click to all label 
        const add_ingre = document.querySelectorAll(".ingres > label")
        add_ingre.forEach((label)=>
        label.addEventListener("click",addelements_ingre)
        )
        // end 
        click_ingre = false;
        
    }
    else{
        // reset the display 
        ingres.style.display = "none";
        btn_ingre.src="image/select.svg"
        document.querySelector("#selection_ingre").style.width = "14%"
        document.getElementById("search_ingre").disabled =false
        document.getElementById("search_ingre").placeholder ="ingrédient"
        search_ingre.value = "";
        click_ingre = true;
        
    }

}

//btn for ustensil

btn_ust.onclick = function(){
    // check if 1 or 2 input for the button  
    if (click_ust == true){
        uste.style.display = "flex";
        document.querySelector("#selection_ust").style.width = "50%"
        document.getElementById("search_ust").disabled =true
        document.getElementById("search_ust").placeholder ="Rechercher un Ustensil"
        btn_ust.src="image/up_select.svg"
        // use the good array
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
        click_ust = false;
    }
    else{
        // reset the display 
        uste.style.display = "none";
        document.querySelector("#selection_ust").style.width = "14%"
        document.getElementById("search_ust").disabled =false
        document.getElementById("search_ust").placeholder ="ustensils"
        btn_ust.src="image/select.svg"
        search_ust.value = "";
        click_ust = true;
    }

}

//btn for the appliance

btn_app.onclick = function(){
    if (click_app == true){
        app.style.display = "flex";
        document.querySelector("#selection_app").style.width = "50%"
        document.getElementById("search_app").disabled =true
        document.getElementById("search_app").placeholder ="Rechercher un Appareils"
        btn_app.src="image/up_select.svg"
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
        click_app = false;
    }
    else{
        app.style.display = "none";
        document.querySelector("#selection_app").style.width = "14%"
        document.getElementById("search_app").disabled =false
        document.getElementById("search_app").placeholder ="Appareils"
        clearDataIngre(uste);
        clearDataIngre(app);
        clearDataIngre(ingres);
        btn_app.src="image/select.svg"
        search_app.value = "";
        click_app = true;
    }

}

// function for the select : ust
function select_ust(recipes){
    const list_ustensils = document.querySelector(".ustensils");
    recipes.forEach((ingres) => {
        const {name , ingredients ,time ,description, ustensils } =ingres;
        //create   label under search bar for each ustensil  
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


// add elements ingre up to the select

function addelements_ingre(e){
    // value of the label target
    const elements_value = e.target.textContent
    const div_select_elem = document.createElement("div")
    const select_elem = document.createElement("label")
    const close = document.createElement("input")
    close.setAttribute("type", "image")
    close.setAttribute("src", "image/close.svg")
    div_select_elem.setAttribute("class","blue selected")
    select_elem.innerHTML= elements_value;
    select_elem.setAttribute("class","label_ingre")
    document.querySelector(".select_selection").appendChild(div_select_elem)
    div_select_elem.appendChild(select_elem)
    div_select_elem.appendChild(close);
    // delete the select creeat
    const close_ingre = document.querySelectorAll(".selected > input")
    filter_select();
    // add event on the close button 
    close_ingre.forEach((close)=>
    close.addEventListener("click" ,function(e){
        e.target.parentNode.remove();
    filter_select();

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
    close.setAttribute("src", "image/close.svg")
    div_select_elem.setAttribute("class","selected red")
    select_elem.innerHTML= elements_value;
    select_elem.setAttribute("class","label_ust")
    document.querySelector(".select_selection").appendChild(div_select_elem)
    div_select_elem.appendChild(select_elem)
    div_select_elem.appendChild(close);
    // delete the select creeat
    const close_ingre = document.querySelectorAll(".selected > input")
    filter_select();
    close_ingre.forEach((close)=>
    close.addEventListener("click" ,function(e){
        e.target.parentNode.remove();
        
        filter_select();
            

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
    close.setAttribute("src", "image/close.svg")
    div_select_elem.setAttribute("class","selected green")
    select_elem.innerHTML= elements_value;
    select_elem.setAttribute("class","label_app")
    document.querySelector(".select_selection").appendChild(div_select_elem)
    div_select_elem.appendChild(select_elem)
    div_select_elem.appendChild(close);
    // delete the select creeat
    const close_ingre = document.querySelectorAll(".selected > input")
    filter_select();
    close_ingre.forEach((close)=>
    close.addEventListener("click" ,function(e){
        e.target.parentNode.remove();
        
        filter_select();
            

    })
    )
    // console.log(e.target.textContent)
} 

// filter with the select 


function filter_select(tab_select){
    const elements_selected_ing = document.querySelectorAll(".label_ingre")
    const elements_selected_ust = document.querySelectorAll(".label_ust")
    const elements_selected_app = document.querySelectorAll(".label_app")
    tab_select = filter_recipe ;
    // if the the array of the function filter select is empty , use the arry recipes 
    if (tab_select.length == 0)
    {
        tab_select = recipes;
    }        
        selected_recipe= tab_select.filter(selected =>{
            let ingredient_var =[];
            let verif_ing = false;
            let verif_ust = false;
            let verif_app = false;
            // get all ingredient 
            for(let i=0 ; i< selected.ingredients.length ;i++){
                ingredient_var = ingredient_var + selected.ingredients[i].ingredient;
                }
            // cheack  ingredient up to the select 1 by 1 
                for(let i=0; i< elements_selected_ing.length  ;i++){
                    verif_ing = ingredient_var.toLowerCase().includes(elements_selected_ing[i].textContent.toLowerCase())
                    if(verif_ing == false)
                    {
                        return false
                    } 
                }
            //check ustensil up to the select 1 by 1
                for(let i=0; i< elements_selected_ust.length  ;i++){
                    verif_ust = selected.ustensils.includes(elements_selected_ust[i].textContent.toLowerCase())
                    if(verif_ust == false)
                    {
                        console.log("false ust")
                        return false
                    }  
                }
            //check app up to the select 1 by 1
                for(let i=0; i< elements_selected_app.length  ;i++){  
                    verif_app = selected.appliance.toLowerCase().includes(elements_selected_app[i].textContent.toLowerCase())
                    console.log(verif_app)
                    
                    if(verif_app == false)
                    {
                        console.log("false app")
                        return false
                    }
                    
                    
                }
                //return the recipe on selected_recipe
                return true 
        })
        if (selected_recipe.length == 0){
            document.querySelector(".msg_vide").style.display = "flex";
        }
        else{
         document.querySelector(".msg_vide").style.display = "none";
         }
        
    // clear recipe show
    clearData();
    // display new recipes
    displayData(selected_recipe);

}

// function search of the select  ingre

search_ingre.addEventListener("keyup",function(e){
        ingres.style.display = "flex";
        const list_ingre = document.querySelector(".ingres");
        // get value of the search bar of the select without uppurcase
        const search_ingre = document.getElementById("search_ingre").value.toLocaleLowerCase();
        // clear label under the select 
        clearDataIngre(ingres)
        btn_ingre.src="image/up_select.svg"
        click_ingre = false;
        document.querySelector("#selection_ingre").style.width = "20%"
        // if ingredient of selected recipe include search bar value 
        selected_recipe.forEach((ingres) => {
            const {name , ingredients ,time ,description } =ingres;
            ingredients.forEach(ingre => {
                const {ingredient ,unit ,quantity}= ingre;
                if (ingredient.toLowerCase().includes(search_ingre))
                {
                    // create new label under the select
                    const ingre_txt = document.createElement('label');
                ingre_txt.textContent= ingredient;
                list_ingre.appendChild(ingre_txt)
                }
                
            });
        });
        // add butoon on label 
        const add_ingre = document.querySelectorAll(".ingres > label")
        add_ingre.forEach((label)=>
        label.addEventListener("click",addelements_ingre)
        )
    
},false);

// function search of the select ust

search_ust.addEventListener("keyup",function(e){
    uste.style.display = "flex";
    // console.log(document.querySelectorAll(".ingres > label"))

        const list_ust = document.querySelector(".ustensils");
        const search_ust = document.getElementById("search_ust").value.toLocaleLowerCase();
        clearDataIngre(uste)
        btn_ust.src="image/up_select.svg"
        click_ust = false;
        document.querySelector("#selection_ust").style.width = "20%"
        selected_recipe.forEach((ingres) => {
            const {name , ingredients ,time ,description ,ustensils} =ingres;
                ustensils.forEach((usten)=> {
                    if (usten.toLowerCase().includes(search_ust))
                     {
                        const ust_txt = document.createElement('label');
                        ust_txt.textContent= usten;
                        list_ust.appendChild(ust_txt)
                    }
                })
        });
        const add_ust = document.querySelectorAll(".ustensils > label")
    add_ust.forEach((label)=>
    label.addEventListener("click",addelements_ust)
    )
    
    
},false);

// function search of the select app 

search_app.addEventListener("keyup",function(e){
    app.style.display = "flex";

        const list_app = document.querySelector(".app");
        const search_app = document.getElementById("search_app").value.toLocaleLowerCase();
        clearDataIngre(app)
        btn_app.src="image/up_select.svg"
        click_app = false;
        document.querySelector("#selection_app").style.width = "20%"
        selected_recipe.forEach((ingres) => {
            const {name , ingredients ,time ,description ,ustensils , appliance} =ingres;
                    if (appliance.toLowerCase().includes(search_app))
                     {
                        const app_txt = document.createElement('label');
                        app_txt.textContent= appliance;
                        list_app.appendChild(app_txt)
                    }
        });
        const add_app = document.querySelectorAll(".app > label")
    add_app.forEach((label)=>
    label.addEventListener("click",addelements_app)
    )
    
    
},false);

