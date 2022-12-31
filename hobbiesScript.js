function rightContent(info,id){
    const element = document.getElementById("right-content");
    element.innerHTML=info;
    
    const el = document.getElementById(id);
    el.style.color="gold";

    for(let i=1;i<=5;i++){
        if(id!=="id"+i){
            const e = document.getElementById("id"+i);
            e.style.color = "black";
        }
    }

    element.classList.remove('right-animation');
    void element.offsetWidth; 
    element.classList.add('right-animation'); 
}