function displayrecette (recipes){
    const {name , ingredients ,time ,description } =recipes;
    function getrecetteDOM() {
        const article = document.createElement ('article');
        const nom = document.createElement ('h2');
        const img = document.createElement ('div');
        const description_time = document.createElement ('div');
        const ingredient_name = document.createElement ('div');
        const timer_div = document.createElement('div');
        const timer = document.createElement('h2')
        const descr = document.createElement('label');
        const clock = document.createElement('img');
        timer_div.setAttribute("class","timer_div");
        clock.setAttribute("class","clock");
        clock.setAttribute("src","image/clock.svg")
        descr.setAttribute("id","description")
        timer.setAttribute("id","time")
        description_time.setAttribute("class","sous_img")
        ingredient_name.setAttribute("class","sous_img_left")
        descr.textContent =description;
        timer.textContent =time +"min"
        img.setAttribute("class","img_vide")
        nom.textContent = name;
        article.appendChild(img);
        article.appendChild(ingredient_name);
        article.appendChild(description_time);
        ingredient_name.appendChild(nom);
        ingredients.forEach(ingredien => {
            const {ingredient ,unit ,quantity}= ingredien;
            const ingredient_div =document.createElement('div');
            const ingredient_txt = document.createElement('label');
            const unit_quant = document.createElement('label');
            ingredient_txt.setAttribute("class","ingredient_txt")
            ingredient_div.setAttribute("class","ingredient")
            ingredient_txt.textContent= ingredient;
            if (quantity ==undefined && unit==undefined ){
                unit_quant.textContent= " ";
            }
            else if(unit == undefined){
                unit_quant.textContent= ": "+ quantity;
            }
            else if(quantity ==undefined){
                unit_quant.textContent= ": "+ unit;
            }
           
            else{
                unit_quant.textContent= ": "+ quantity + unit;
            }
            ingredient_name.appendChild(ingredient_div);
            ingredient_div.appendChild(ingredient_txt)
            ingredient_div.appendChild(unit_quant)
        });
        description_time.appendChild(timer_div);
        timer_div.appendChild(clock);
        timer_div.appendChild(timer);
        description_time.appendChild(descr);
        return article;
    }
    return {getrecetteDOM};
}