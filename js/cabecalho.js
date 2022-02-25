let navDrop = document.getElementById('drop-down');
let controleNav = false;

navDrop.addEventListener('click', controlaNavDrop);

function controlaNavDrop(){
    if(controleNav){
        let lisNav = document.getElementsByClassName('nav-lista-item');
        for(li of lisNav) {
            if(li.id !== '') continue;
            li.style.display = 'none';
            li.style.margin = '5px 0'; //Rever essas margens
        }
        navDrop.style.transform = 'rotate(0deg)';
        navDrop.innerHTML = '< >';
    }else{
        let lisNav = document.getElementsByClassName('nav-lista-item');
        for(li of lisNav) {
            li.style.display = 'block';
            li.style.margin = '5px 0'; //Rever essas margens
        }
        navDrop.style.transform = 'rotate(-180deg)';
        navDrop.innerHTML = '< / >';
    }
    controleNav = !controleNav;
}