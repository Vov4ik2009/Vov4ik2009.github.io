const list = document.getElementById('list');

function drawList(){

    let list_html = ``;
    
    companies.map( function(company){
        list_html+=`<a href="#" class="list-group-item list-group-item-action">${company.name}</a>`;

    } )

    list.innerHTML = list_html;
    addClick()
}

function addClick(){
    const li = document.querySelectorAll('.list-group-item')

    li.forEach( function(el, index) {
    el.addEventListener('click', function(){
        removeActive()
        this.classList.add('active')
        drawInfo(index)
        })
    } )
}

function removeActive() {
    const li = document.querySelectorAll('.list-group-item')
    
    
    li.forEach( function(el) {
        el.classList.remove('active')
    } )
     
}

function drawInfo(index){
    const company = companies[index];
    let company_html = ``;

    company_html+=`<h4>${company.name}</h4>`;

    company.info.map( function(par){
        company_html += `<p>${par}</p>`
    } )

    document.getElementById('info').innerHTML = company_html;
}

drawList();