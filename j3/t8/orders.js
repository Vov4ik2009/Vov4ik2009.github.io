class AdminOrders{
    constructor(){
        this.getOrders();
    }

  getOrders(){
    db.collection('orders').get().then(
        res =>{
            res.forEach(element => {
                const order ={
                    id: element.id,
                    ...element.data()
                }

                this.render(order)
            })
        }
    )
  }
  render(order){
        const root = document.getElementById('root')

        const p = document.createElement('p');
        p.classList.add('d-flex')
        p.classList.add('justify-content-between')
        
        const order_id = document.createElement('span');
        order_id.innerText = order.id;
        p.appendChild(order_id);

        const order_btn = document.createElement('a');
        order_btn.classList.add('btn');
        order_btn.classList.add('btn-primary')
        order_btn.innerText = 'Submit';
        order_btn.href = `order.html?id=${order.id}`
        order_btn.target = '_blank';
        p.appendChild(order_btn);

        const mail_btn = document.createElement('a');
        mail_btn.classList.add('btn');
        mail_btn.classList.add('btn-warning')
        mail_btn.innerText = 'Send Email';
        mail_btn.href = `mailto:${order.user_email}?subject=Order%20submited&body=Test%20body.%0AWith%20many%20text.`
        p.appendChild(mail_btn);

        root.appendChild(p);

    }
}

    

const adminOrders = new AdminOrders();