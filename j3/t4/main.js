const users_table = document.getElementById('users_table');

db.collection("users").get().then(function(res) {
     let num = 0;
     res.forEach( function(doc){
          const user = doc.data();
          user.id = doc.id;

          console.log(user);

          num++;
          drawUser(user, num)
     })

     const del_buttons = document.getElementsByClassName('btn-del');
     const del_buttons_arr = Array.from(del_buttons);
     del_buttons_arr.forEach( function(btn){
          btn.addEventListener('click', function(){
               console.log('delete');
               const tr = btn.parentElement.parentElement;
               //видаляємо документ
               db.collection("users").doc(tr.id).delete().then( function(){
                    // дії після видалення
                    console.log("Document deleted!")

               })
          })
     })
 }); 

function drawUser(user, num){
     const row = document.createElement('tr');
     
     //додаємо  номер користувача у таблицю
     const index = document.createElement('td');
     index.innerText = num;
     row.appendChild(index);

     //додаємо ім'я користувача у таблицю
     const name = document.createElement('td');
     name.innerText = user.name;
     row.appendChild(name);

     //додаємо прізвище користувача у таблицю
     const lastname = document.createElement('td');
     lastname.innerText = user.lastname;
     row.appendChild(lastname);

     //додаємо email користувача у таблицю
     const email = document.createElement('td');
     email.innerText = user.email;
     row.appendChild(email);

      //додаємо вік користувача у таблицю
      const age = document.createElement('td');
      age.innerText = user.age;
      row.appendChild(age);

      //додаємо кнопку редагувати
     const edit = document.createElement('button');
     edit.classList.add('btn');
     edit.classList.add('btn-sm');
     edit.classList.add('btn-primary');
     edit.classList.add('btn-edit');
     edit.innerText = "Edit";


     const edit_td = document.createElement('td');
     edit_td.appendChild(edit);
     row.appendChild(edit_td);

      //додаємо кнопку видаляти
      const del = document.createElement('button');
      del.classList.add('btn');
      del.classList.add('btn-sm');
      del.classList.add('btn-danger');
      del.classList.add('btn-del');
      del.innerText = "delete";
 
 
      const del_td = document.createElement('td');
      del_td.appendChild(del);
      row.appendChild(del_td);

      row.id = user.id;
     users_table.appendChild(row);
}
