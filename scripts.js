function rightContent(info,id,image){
    const main_element = document.getElementById("right-content");
    
    const element = document.getElementById("content-top")
    element.innerHTML=info;

    const img = document.getElementById("content-img");
    img.src="img/"+image;

    const el = document.getElementById(id);
    el.style.color="gold";

    for(let i=1;i<=5;i++){
        if(id!=="id"+i){
            const e = document.getElementById("id"+i);
            e.style.color = "gray";
        }
    }

    main_element.classList.remove('right-animation');
    void main_element.offsetWidth; 
    main_element.classList.add('right-animation'); 
}

function projectContent(info,id,image,proj,code){
    const main_element = document.getElementById("right-content");
    
    const element = document.getElementById("content-top")
    element.innerHTML=info;

    const proj_link = document.getElementById("project")
    if(proj !== ''){
        proj_link.innerHTML = '<i class="fa fa-file-o" aria-hidden="true"></i> Live project';
    }
    else{
        proj_link.innerText = "";
    }
    proj_link.setAttribute('href','https://'+proj);
    
    const code_link = document.getElementById("code")
    
    if(code !== ''){
        code_link.innerHTML = '<i class="fa fa-file-code-o"></i> Source Code';
    }
    else{
        code_link.innerText = "";
    }
    code_link.setAttribute('href','https://'+code);

    const img = document.getElementById("content-img");
    img.src="img/"+image;

    const el = document.getElementById(id);
    el.style.color="gold";

    for(let i=1;i<=3;i++){
        if(id!=="id"+i){
            const e = document.getElementById("id"+i);
            e.style.color = "gray";
        }
    }

    main_element.classList.remove('right-animation');
    void main_element.offsetWidth; 
    main_element.classList.add('right-animation'); 
}