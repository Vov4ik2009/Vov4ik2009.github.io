function login() {
     const email = document.getElementById('email');
     const password = document.getElementById('password');

     db.collection('users')
     .where('email', '==', email.value)
     .get()
     .then((res)=>{
               res.forEach(doc => {
               let user  = {
                    id: doc.id,
                    ...doc.data()
               }
               if(user.password == password.value){
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location.href = 'index.html';
               }else {
                    alert('Невірний пароль')
               }
               console.log(user)   
               })
               
     });
}
function checkUser() {
     const user = localStorage.getItem('user');
     console.log(user)
     if(user != null || user != ''){
          window.location.href = 'index.html';
     }
}