document.addEventListener('DOMContentLoaded', async function(){   
    //витягуємо темплейти
    let home = await axios.get("templates/home.html");
    let login = await axios.get("templates/login.html");
    let addproduct = await axios.get("templates/addproduct.html");
    let allproducts = await axios.get("templates/allproducts.html");
    let productCard = await axios.get("templates/productCard.html");

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
        edit_product:{}
    };

    //Components
    const Home = {
        template: home.data,
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
                    localStorage.setItem("admin", JSON.stringify(true));
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
                        this.$root.$forceUpdate();
                        console.log('email true');
                    }else if(data.admin = true){
                        data.admin = false;
                        this.$root.$forceUpdate();
                    }
                } )

                console.log('check for admin!', email);
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
                    price: document.getElementById('product_price').value
                }
                db.collection("products")
            .add(newProduct)
            .then(() => console.log('product added to db'))
                console.log(newProduct);
                console.log('adding new product')
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
                document.getElementById('edit_name').value = data.edit_product.name;
                document.getElementById('edit_price').value = data.edit_product.price;
                document.getElementById('edit_image').value = data.edit_product.url;
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
                data.edit_product.name = document.getElementById('edit_name').value 
                data.edit_product.price = document.getElementById('edit_price').value  
                data.edit_product.url = document.getElementById('edit_image').value  
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
    
    
    //Routs(які компоненти відображати)
    const routes = {
        '/': Home,
        '/home': Home,
        '/login': Login,
        '/addproduct': AddProduct,
        '/allproducts': AllProducts
    }

    const app = {
        data() {  return data },
        methods: {
            logOut(){
                firebase.auth().signOut().then(() => {
                    // Sign-out successful.
                    data.logged = false
                    data.admin = false
                    this.$root.$forceUpdate();
                    window.location.hash = '/login'
                  }).catch((error) => {
                    // An error happened.
                    console.log(error);
                  });
            },
            checkUser(){
                data.user = JSON.parse(localStorage.getItem("user")) || {};
                data.admin = JSON.parse(localStorage.getItem("admin")) || false;

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