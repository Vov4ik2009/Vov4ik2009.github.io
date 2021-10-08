let users_arr = [];

db.collection('users').get().then(function(res){
     users = res.forEach(function(doc){
       const user = doc.data();
       users_arr.push(user);
    })
    console.log(users_arr)
})

console.log(users_arr)