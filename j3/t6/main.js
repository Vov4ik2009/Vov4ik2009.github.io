function isLoged() {
     const user = localStorage.getItem('user');
     if(user == null){
          window.location.href = 'login.html';
     }
}
isLoged();

let articles = [];

function getArticles() {
     db.collection('articles').get().then(res => {
          res.forEach ( doc=>{
               let article = {
                    id: doc.id,
                    ...doc.data()
               }
               articles.push(article);
                drawArticles(article.id, article.title);
          } )
         
     })
}
getArticles();
function drawArticles(id, title) {
     const box = document.createElement('div');
     const boxImage = document.createElement('div');
     const boxTitle = document.createElement('div');

     box.classList.add('box');
     box.classList.add('d-flex');
     box.classList.add('mb-3');
     box.id = id;

     boxImage.classList.add('box-image');

     boxTitle.classList.add('box-title');

     boxTitle.innerText = title;

     box.appendChild(boxImage);
     box.appendChild(boxTitle);

     document.getElementById('articles-box').appendChild(box);
}