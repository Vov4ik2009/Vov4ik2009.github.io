const orders = storageGet("orders");
const orders_list = document.getElementById('orders_list');

let orders_html = ``;

orders.forEach( function(order, index){
    let order_products = ``;
    order.cart.forEach( function(product, index){
        order_products +=
        `
        <tr>
            <th>${index + 1}</th>
            <td>
                <img src=" ${product.image}" height="100" />
            </td>
            <td>${product.name}</td>
            <td>${product.price}</td>
        </tr>
        `
    } )
   
    orders_html +=
    `
    <div class="my-3">
        <div class="d-flex justify-content-between px-3 align-items-center order_header">
            <p>${order.name}</p>
            <p>${order.email}</p>
            <p>
                <button class="btn btn-sm btn-danger">Видалити</button>
            </p>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${order_products}
                </tbody>
            </table>
        
        </div>
    </div>
    `
} );
orders_list.innerHTML = orders_html;

console.log(orders)