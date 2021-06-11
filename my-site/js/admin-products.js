let admin = JSON.parse( localStorage.getItem('admin') );
if( admin != true ){
    window.location = 'index.html';
}
function drawProducts(){
    const products = storageGet("products") || [];
    let products_html = ``;
    products.forEach( function(product, index){
        products_html +=
        `
        <tr>
            <th>${index + 1}</th>
            <td>
                <img src=" ${product.image}" height="100" />
            </td>
            <td>${product.name}</td>
            <td>${product.count}</td>
            <td>${product.price}</td>
            <td>
            <button type="button" class="btn btn-danger btn-sm" onclick = 'deleteProduct(${index})'>Видалити</button>
            </td>
            <td>
            <button type="button" class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = 'editProduct(${index})'>Змінити</button>
            </td>
        </tr>
        `
    } )
    document.getElementById("admin_table").innerHTML = products_html;
}

function deleteProduct(index){
    const products = storageGet("products") || [];

    products.splice(index, 1);

    storageSave("products", products);

    drawProducts();
}

function editProduct(index){
    const products = storageGet('products') || [];

    document.getElementById('name').value = products[index].name;
    document.getElementById('image').value = products[index].image;  
    document.getElementById('price').value = products[index].price  ;
    document.getElementById('count').value = products[index].count  ;

    document.getElementById('modal-footer').innerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary" onclick="saveEditProduct(${index})" data-bs-dismiss="modal">Save changes</button>
    `

   
}

function saveEditProduct(index) {
    const products = storageGet('products') || [];

    products[index].name = document.getElementById('name').value ;
    products[index].image = document.getElementById('image').value  ;  
    products[index].price = document.getElementById('price').value   ;
    products[index].count = document.getElementById('count').value  ;
    
    console.log('test');
    storageSave('products', products)
    
    drawProducts();
}
function saveJSON(){
    let products = storageGet("products") || [];

    console.log(JSON.stringify(products))
}
drawProducts();