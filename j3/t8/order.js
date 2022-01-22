class SubmitedOrder{
    constructor(){
        this.getOrder();

    }
    getOrder(){
        const url= new URL(window.location.href)
        const id = url.searchParams.get('id');
        this.getOrderById(id)
    }
    getOrderById(id){
        db.collection('orders').doc(id).get().then(res =>{ 
            console.log(res.data())
            this.render(res.data())
        })
    }
    render(order){
        const root = document.getElementById('root')
        const order_name = document.createElement('p')
        order_name.innerText = 'Order.name: ' + order.product_name;

        const order_price = document.createElement('p')
        order_price.innerText = 'Product price: ' + order.product_price;

        const count = document.createElement('p')
        count.innerText = 'Count: ' + order.count;

        const delivery = document.createElement('p')
        delivery.innerText ='Delivery: ' + order.delivery;

        const total = document.createElement('p')
        total.innerText = 'Total: ' + order.total;


        root.appendChild(order_name)
        root.appendChild(order_price)
        root.appendChild(count)
        root.appendChild(delivery)
        root.appendChild(total)
    }
}
const order = new SubmitedOrder();
