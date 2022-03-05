document.addEventListener('DOMContentLoaded', async function(){   
    //витягуємо темплейти
    let home = await axios.get("templates/home.html");
    let login = await axios.get("templates/login.html");

    //Основна інфа для spa(сайту)
    const data =  {
        message: 'Hello Vue.js!',
        currentPath: window.location.hash,
    };

    //Components
    const Home = {
        template: home.data,
    };

    const Login = {
        template: login.data,
         methods: {
            googleAuth(){
                console.log("click");

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

                    console.log(new_user);
                })
                .catch( error => {
                    console.log(error)
                });
                //...
            }
         }
    };
    
    //Routs(які компоненти відображати)
    const routes = {
        '/': Home,
        '/home': Home,
        '/login': Login
    }

    const app = {
        data() {  return data },
        methods: {

         },
        components: {

        },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || NotFound
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            })
        }
    }
    Vue.createApp(app).mount('#app');
})