function isLoged() {
     const user = localStorage.getItem('user');
     if(user == null){
          window.location.href = 'login.html';
     }
}
isLoged();