let admin = JSON.parse( localStorage.getItem('admin') );
if(admin === true){
    window.location = 'admin-edit.html';
}

function adminLogin(){
    const adminPassword = document.getElementById('adminPassword').value

    if(adminPassword === 'qwerty'){
        displayMessage('message-success', 'admin', 'вірний пароль', 5000);
        
        localStorage.setItem('admin', JSON.stringify(true))

        setTimeout(function(){
            window.location = 'admin-edit.html';
        }, 4500);
    } else{
        displayMessage('message-error', 'Admin', 'Невірний пароль', 5000);
        document.getElementById('adminPassword').value = '';
    }
}