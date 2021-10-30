function login() {
     const email = document.getElementById('email');
     const password = document.getElementById('password');

     db.collection('users').get().where('email', '===', email.value).then((res)=>{
               console.log(res.doc())
     });
}