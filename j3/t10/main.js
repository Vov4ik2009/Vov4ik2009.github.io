const data = {
     message:'Hello vue.js',
     products:['Iphone 13', 'Iphone 14'],
     image:'https://stylus.ua/thumbs/568x568/07/2b/2080453.png',
     test: {
          id: 0,
          name:'Ipad'
     }
}



const CardTemplate = {
     props: ['product'],
     template: `<p>{{product.name}}</p>`

}
const app = {
     data(){
          return data
     },
     components:{
          CardTemplate
     }
}

Vue.createApp(app).mount('#app')