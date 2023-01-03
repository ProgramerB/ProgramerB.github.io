function rightContent(info,id,image,limit){
    const main_element = document.getElementById("right-content");
    
    const element = document.getElementById("content-top")
    element.innerHTML=info;

    const img = document.getElementById("content-img");
    img.src="img/"+image;

    const el = document.getElementById(id);
    el.style.color="gold";

    for(let i=1;i<=limit;i++){
        if(id!=="id"+i){
            const e = document.getElementById("id"+i);
            e.style.color = "gray";
        }
    }

    main_element.classList.remove('right-animation');
    void main_element.offsetWidth; 
    main_element.classList.add('right-animation'); 
}