function toggle_item(el){
    const ac_body = el.querySelector('.accordion_body')
    
    if(!el.classList.contains('isOpen')){
        ac_body.style.height = `${ac_body.scrollHeight}px`
        el.classList.add('isOpen')
    }else{
        ac_body.style.height = '0';
        el.classList.remove('isOpen')
    }
}


document.querySelectorAll('.accordion_item').forEach( function(el){
    el.addEventListener('click', function(){
        const opened = document.querySelector('.isOpen');
        toggle_item(this)

        if(opened && opened !== el){
            toggle_item(opened)
        }
    } )
} )

