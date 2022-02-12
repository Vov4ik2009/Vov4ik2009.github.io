document.addEventListener('DOMContentLoaded', async function(){
    let text = await axios.get("templates/test.html");
    
    const data = {
        message:'Hello vue.js',
        products : [
            {
                name:'Футболки',
                url:'https://talant.shop/static/items/2019/November/5dbc31ea8c52ab6209a6d122-medium.jpg',
                count: 1,
                color: '#fff',
                price: 20,
                preOrder: false,
                delivery: false,
                totalPrice: 20

            },
            {
                name:'Штани за 40 грн',
                url:'https://sturm.com.ua/image/cache/catalog/shtany-shorty/com-ua-image-catalog-shtany-shorty-H5118-01-580x580.jpg',
                count: 1,
                color: '#fff',
                price: 40,
                preOrder: false,
                delivery: false,
                totalPrice: 40

            }
        ]
    }
    
    const CardTemplete = {
        props:['product'],
            template:text.data,
        methods:{
            countTotalPrice(){
                let allPrice = this.product.count * this.product.price;
                let preOrder = 0;
                let delivery = 0;
                if(this.product.preOrder){
                    preOrder = (allPrice*(1/20))
                }
                if(this.product.delivery){
                    delivery = allPrice/10;
                }
                this.product.totalPrice = allPrice - preOrder + delivery;
            }
        }
    }
    
    const app = {
        data(){
            return data
        },
        components: {
            'card': CardTemplete
        },
        methods:{},
    }
    Vue.createApp(app).mount('#app')
})
