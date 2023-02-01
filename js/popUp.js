let close = document.querySelector('#close')
let closeab = document.querySelector('#closea')
let popUpMsg = document.querySelector('#popUp')
let popUpFalsee = document.querySelector('#popUpFalse')
let subscribe = document.querySelector('#subscribe_Submit')
let bg_img__c = document.querySelector('.bg_img')
let containerr = document.querySelector('#container')
close.addEventListener('click',()=>{
    popUpMsg.style.display = 'none'
    bg_img__c.classList.remove('blur')
    containerr.classList.remove('blur');
    containerr.style.pointerEvents= 'auto';

});

closeab.addEventListener('click',()=>{
    popUpFalse.style.display = 'none'
    bg_img__c.classList.remove('blur')
    containerr.classList.remove('blur');
    containerr.style.pointerEvents= 'auto';
});

const onSubscribe = (e)=>{
    /* e.preventDefault() */
    bg_img__c.classList.add('blur');
    containerr.classList.add('blur');
    popUpMsg.style.display = 'flex';
    containerr.style.pointerEvents= 'none';

}

const onerror = (e)=>{
    /* e.preventDefault() */
    bg_img__c.classList.add('blur');
    containerr.classList.add('blur');
    popUpFalse.style.display = 'flex';
    containerr.style.pointerEvents= 'none';

}
/* subscribe.addEventListener('click', onSubscribe); */


