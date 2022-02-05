const data = {
    message:'Hello vue.js',
    products : []
}

const CardTemplete = {
    props:['product'],
        template:
    `
    
    <div class="card">
    <img :src="product.url" class="card-img-top product-img" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between">
          <span>Діагональ экрана:</span> <span>{{product.display}}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Фронтальна камера:</span> <span>{{product.camera}}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <span>Емкість аккумулятора:</span> <span>{{product.acc}}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <span>Ціна:</span> <span> {{product.price}}₴</span>
        </li>
    </ul>
    <div class="card-body d-flex justify-content-end">
      <a 
      href="#"
      class ="btn"
      :class="{
      'btn-success': product.added == true,
      'btn-primary': product.added != true
      }"
      @click='addToCart(product)'
      >{{ product.added != true ? 'Додати в корзину' : 'Додано'}}
      </a>
    </div>
</div>
    `,
    methods:{
        
        addToCart(product){
            product.added = true;
            console.log('added product', product.id);
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
    methods:{
        getProductsFromDb(){

            db.collection('products')
            .get()
            .then(doc => {
                doc.forEach(element => {
                    this.products.push(element.data())
                });
            })
        }
    },
    created: function(){
        this.getProductsFromDb()
    }
    
}
Vue.createApp(app).mount('#app')