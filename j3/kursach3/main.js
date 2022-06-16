document.addEventListener('DOMContentLoaded', async function(){   
    //витягуємо темплейти
    let home            = await axios.get("templates/home.html");
    let login           = await axios.get("templates/login.html");
    let addproduct      = await axios.get("templates/addproduct.html");
    let allproducts     = await axios.get("templates/allproducts.html");
    let productCard     = await axios.get("templates/productCard.html");
    let orderProducts   = await axios.get('templates/orderproducts.html');
    let cart            = await axios.get('templates/cart.html');
    let orderProductCard= await axios.get('templates/orderProductCard.html');
    let myOrders         = await axios.get("templates/myOrders.html");
    let myOrdеrsAdmin    = await axios.get("templates/myOrdеrsAdmin.html");
    let productInfo    = await axios.get("templates/productinfo.html");

    //Основна інфа для spa(сайту)
    const data =  {
        message: 'Hello Vue.js!',
        currentPath: window.location.hash,
        user: {},
        signIn: false,
        logged: false,
        admin: false,
        newProductImage:'' ,
        products: [],
        edit_product:{},
        cart: [],
        orderedProducts: [],
        newOrder: { order: {}, user: {}, status: 'pending' },
        orderSubmited: false,
        myOrders: [],
        adminOrders: [],
        productInfoId: '0aWBDHAKEW0fCrRIR0Cr',
        productInfo:{},
        filter:{
            name:'',
            minPrice: 1,
            maxPrice: 10000
        }

    };

    //Components
    const Home = {
        template: home.data,
    };

    const ProductInfo = {
        template: productInfo.data,
        methods: {
            getProduct(id){
                localStorage.setItem("productInfoId", id);
                db.collection("products")
                .doc(id)
                .get()
                .then( doc => {
                    data.productInfo = {id: doc.id, ...doc.data()}
                    console.log(doc.data())
                    this.$forceUpdate();
                })
            }
        },
        mounted: function(){
            let productId = localStorage.getItem("productInfoId");
            this.getProduct(productId)
            setTimeout(()=>{
                var swiper = new Swiper(".mySwiper", {
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }, 500)
        }
    };
    const Login = {
        template: login.data,
         methods: {
            googleAuth(){
                firebase.auth()
                .signInWithPopup(provider)
                .then( result => {
                    console.log(result) 
                    const user = result.user;

                    const new_user = {
                        displayName : user.displayName,
                        email: user.email,
                        photo: user.PhotoURL
                    }
                    data.user = new_user;
                    data.logged = true;
                    
                    this.$root.$forceUpdate();
                    window.location.hash = '/home'
                    localStorage.setItem("user", JSON.stringify(new_user));
                    this.checkAdmin(user.email)
                    console.log(new_user);
                })
                .catch( error => {
                    console.log(error)
                });
            
                //...
            },
            signUpWithPassword(){
                console.log('signUpWithPassword');
                const email = document.getElementById('user-email').value;
                const password = document.getElementById('user-password').value;
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    const new_user = {
                        displayName : user.displayName,
                        email: user.email,
                        photo: user.PhotoURL
                    };
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    this.checkAdmin(user.email)
                    window.location.hash = '/home'
                    localStorage.setItem("user", JSON.stringify(new_user));
                    localStorage.setItem("admin", JSON.stringify(true));
                    console.log(new_user);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errrorCode);
                    console.log(errrorMessage);
                    // ..
                });
            },
            signInWithPassword(){
                const email = document.getElementById("user-email").value;
                const password = document.getElementById("user-password").value;
                console.log(email)
;
                console.log(password);

                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;

                    const new_user = {
                        displayName: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    };
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    this.checkAdmin(user.email)
                    window.location.hash = '/home'
                    localStorage.setItem("user", JSON.stringify(new_user));
                    localStorage.setItem("admin", JSON.stringify(true));
                    console.log(new_user);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
            },
            checkAdmin(email){
                db.collection('admins')
                .get()
                .then( res => {
                    const adminEmails = [];
                    res.forEach( e => adminEmails.push( e.data().email ) )
                    if(adminEmails.includes(email)){
                        data.admin = true;
                        localStorage.setItem('admin', true)
                        this.$root.$forceUpdate();
                        console.log('email true');
                    }else if(data.admin == true){
                        data.admin = false;
                        localStorage.setItem('admin', false)
                        this.$root.$forceUpdate();
                    }else{
                        data.admin = false;
                        localStorage.setItem('admin', false)  
                        this.$root.$forceUpdate(); 
                    }
                } )

                console.log('check for admin!', email);
            },
            checkCart(email){
                const lastUserEmail = localStorage.getItem("lastUserEmail") || "";
                if(lastUserEmail != email){
                    localStorage.setItem("cart", JSON.stringify([]));
                    data.cart = [];
                    localStorage.setItem("lastUserEmail", email);
                }
            }
           
         }
    };
    const AddProduct ={
        template: addproduct.data,
        props:['newProduct'],
        methods:{
            addProductToDB(){
                const newProduct = {
                    name: document.getElementById('product_name').value,
                    url: document.getElementById('product_img'  ).value,
                    price: Number(document.getElementById('product_price').value),
                    description: document.getElementById('product_description').value,
                    photos: document.getElementById('product_photos').value.split("\n")
                }
                db.collection("products")
            .add(newProduct)
            .then(() => toastr.success('New product added!'))
            }
        }
    }
    const ProductCard ={
        name: 'product-card',   
        template: productCard.data,
        props:['product'],
        methods:{
            deleteProduct(id){
                db.collection("products")
                .doc(id)

                .delete()
                .then( () => {
                    // дії після видалення
                    console.log("Document deleted!")
                    data.edit_product = data.products.filter( e => e.id != id );
                    this.$parent.getAllProducts();
                });
            },  
            editProduct(id){
                console.log("Edit - ", id);
                data.edit_product = data.products.filter( e => e.id == id )[0];
                this.$parent.$forceUpdate();
            }
        }
    }
    const AllProducts = {
        template: allproducts.data,
        methods:{
            getAllProducts(){
                console.log('GET ALL PRODUCTS!!!!');
                db.collection('products')
                .get()
                .then( res => {
                    data.products = [];
                    res.forEach( element => {
                        const product = {
                            ...element.data(),
                            id: element.id
                        };
                        data.products.push(product)
                    })
                    console.log(data.products);
                    console.log('new products');
                    this.$forceUpdate();
                })
            },
            saveEditedproduct(){
                console.log('UPDATING');
                 db.collection("products")
                 .doc(data.edit_product.id)
                 .update(data.edit_product)
                 .then( () =>{
                     // дії після оновлення
                     console.log("Document is updated!")
                     this.getAllProducts();
                 });
             }
        },
        components: {
            ProductCard
        },
        mounted: function(){
            this.getAllProducts();
        }
    }
    const OrderProductCard = {
        name: "order-product-card",
        template: orderProductCard.data,
        props: ['product'],
        methods: {
            goToProduct(id){
                data.productInfoId = id;
                localStorage.setItem("productInfoId", id);
                window.location.hash="#/product-info"
            },
            addToCart(id){
                if(!data.cart.includes(id)){
                    data.cart.push(id); 
                    localStorage.setItem('cart', JSON.stringify(data.cart))
                }
                
                data.products.forEach( product => {
                    if(product.id == id){ 
                        product.inCart = true; 
                    };
                }) 
                this.$forceUpdate();
                this.$root.$forceUpdate();
            }
        }
    }
    const OrderProducts = {
        template: orderProducts.data,
        methods: {
            getAllProducts(){
                db.collection("products")
                .get()
                .then( res => {
                    data.products = [];
                    res.forEach( element => {
                        const product = {
                            ...element.data(),
                            id: element.id
                        };
                        if(data.cart.includes(product.id)){
                            product.inCart = true; 
                        }
                        data.products.push(product)
                    })
                    this.$forceUpdate();
                })
            },
            filter(){
                console.log(data.filter)
                if( data.filter.minPrice < 0 ||
                    data.filter.maxPrice < data.filter.minPrice ||
                    data.filter.minPrice == "" ||
                    data.filter.maxPrice == ""
                ){
                    data.filter.minPrice = 0;
                    data.filter.maxPrice = 10000;
                }
                db.collection("products")
                .where("price", ">=", Number(data.filter.minPrice))
                .where("price", "<=", Number(data.filter.maxPrice))
                .get()
                .then( res => {
                    data.products = [];
                    res.forEach( element => {
                        const product = {
                            ...element.data(),
                            id: element.id
                        };
                        if(data.cart.includes(product.id)){
                            product.inCart = true;
                        }
                        if(data.filter.name != ""){

                            if(product.name.toLowerCase().includes(data.filter.name.toLowerCase())){
                                data.products.push(product); 
                            }

                        }else{
                           data.products.push(product); 
                        }
                    })
                    this.$forceUpdate();
                })
            }

        },
        components: {
            OrderProductCard
        },
        mounted: function(){
            this.getAllProducts();
        }
    }
    const Cart = {
        template: cart.data,
        methods: {
            getProductsFromCart(){
                data.orderedProducts = [];
                data.cart = JSON.parse(localStorage.getItem("cart")) || [];
                this.$forceUpdate();
                if(data.cart.length < 1) return;
                db.collection("products")
                .where(firebase.firestore.FieldPath.documentId(), "in", data.cart)
                .get()
                .then( res => {
                    res.forEach(e => {
                        const product = {
                            id: e.id,
                            count: 1,
                            ...e.data()
                        };
                        data.orderedProducts.push(product);
                    })
                    this.countOrderPrice();
                    this.$forceUpdate();
                })
            },
            removeProductFromCart(id){
                data.cart = data.cart.filter(prod_id => prod_id != id)
                data.orderedProducts = data.orderedProducts.filter(prod => prod.id != id)
                localStorage.setItem('cart', JSON.stringify(data.cart))
                this.countOrderPrice();
                this.$forceUpdate()
                this.$root.$forceUpdate()
                
            },
            countOrderPrice(){
                console.log(data.orderedProducts);
                let orderSum = 0;
                data.orderedProducts.forEach( p => {
                    orderSum += Number(p.price)*p.count;
                })
                data.newOrder = {
                    order: {
                        sum: orderSum,
                        products: data.orderedProducts
                    },
                    user: data.user
                }
            },
            submitOrder(){
                if(!confirm('Submit Order?')){return}

                db.collection('orders')
                .add(data.newOrder)
                .then( res => {
                    console.log('order yeeees');
                    data.cart = [];
                    data.orderedProducts = [];
                    data.newOrder = { order: {}, user: {}, status: "pending" };
                    localStorage.removeItem('cart')
                    this.$root.$forceUpdate()
                } )
            }
        
        },
        components: {
        },
        mounted: function(){
            this.getProductsFromCart();
        }
    }

    const MyOrdеrs = {
        template: myOrders.data,
        methods: {
            getMyOrders(){
                data.myOrders = [];
                const userEmail = data.user?.email || JSON.parse(localStorage.getItem("user"))?.email;
                db.collection("orders")
                .where("user.email", "==", userEmail)
                .get()
                .then( res => {
                    res.forEach(e => {
                        const order = {
                            id: e.id,
                            ...e.data()
                        }
                        data.myOrders.push(order)
                    })  
                    console.log(data.myOrders);
                    this.$forceUpdate();
                })
            }
        },
        mounted: function(){
            //що відбувається при першому показі
            this.getMyOrders()
        }
    }

    const MyOrdеrsAdmin = {
        template: myOrdеrsAdmin.data,
        methods: {
            getAllOrders(){
                data.adminOrders = [];
                db.collection("orders")
                .get()
                .then( res => {
                    res.forEach(e => {
                        const order = {
                            id: e.id,
                            ...e.data()
                        }
                        data.adminOrders.push(order)
                    })
                    console.log(data.adminOrders);
                    this.$forceUpdate();
                })
            },
            changeStatus(status, id){
                db.collection("orders")
                .doc(id)
                .update({status: status})
                .then(() => {
                    toastr.success('Status updated!')
                    
                })
            },
            deleteOrder(id){
                if(!confirm("Are you sure?")) return
                db.collection("orders")
                .doc(id)
                .delete()
                .then(() => {
                    this.getAllOrders();
                    toastr.error('Order deleted!');
                })
            }
        },
        mounted: function(){
            //що відбувається при першому показі
            this.getAllOrders();
        }
    }
    
    
    //Routs(які компоненти відображати)
    const routes = {
        '/': Home,
        '/home': Home,
        '/login': Login,
        '/addproduct': AddProduct,
        '/allproducts': AllProducts,
        '/products': OrderProducts,
        '/cart': Cart,
        '/my-orders': MyOrdеrs,
        '/orders-admin': MyOrdеrsAdmin,
        '/product-info': ProductInfo
    }

    const app = {
        data() {  return data },
        methods: {
            logOut(){
                firebase.auth().signOut().then(() => {
                    // Sign-out successful.
                    data.logged = false
                    data.admin = false
                    localStorage.removeItem('user');
                    localStorage.removeItem('admin');
                    localStorage.removeItem('cart');
                    this.$root.$forceUpdate();
                    data.user = {};
                    data.cart = [];
                    window.location.hash = '/login'
                  }).catch((error) => {
                    // An error happened.
                    console.log(error);
                  });
            },
            checkUser(){
                data.user = JSON.parse(localStorage.getItem("user")) || {};
                data.admin = JSON.parse(localStorage.getItem("admin")) || false;
                data.cart = JSON.parse(localStorage.getItem("cart")) || []
                if(data.user.email != null){
                    data.logged = true;
                }
                this.$forceUpdate(); 
                console.log("User checked!");
            }

         },
        components: { },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || Home
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            });
            this.checkUser();
            
        }
    }
    Vue.createApp(app).mount('#app');
})