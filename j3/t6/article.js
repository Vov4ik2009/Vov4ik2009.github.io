const url = new URL(window.location.href)
const article_id = url.searchParams.get('id');
console.log(url)


if(article_id){
    getArticle(article_id);
}
function getArticle(article_id) {
     db.collection('articles')
     .doc(article_id)
     .get()
     .then(res =>{
            let article = {
               id:res.id,
               ...res.data()
          }
            console.log(article);
            drawArticle(article);  
          })
}

function drawArticle(article) {
     const title = document.createElement('h1');
     title.innerText = article.title;
     const article_text = document.createElement('div');
     article_text.innerHTML = article.article;
     const article_body = document.getElementById('article_body');

     article_body.appendChild(title);

     article_body.appendChild(article_text);
     
     const likes_box = document.createElement('div');
     likes_box.id = 'like-btn';
     likes_box.classList.add('d-flex');
     likes_box.classList.add('justify-content-end');

     const likes = document.createElement('div');

     likes.innerHTML=
     `
     <svg id="like-svg" viewBox="0 0 24 24" class="style-scope" style="pointer-events: none; fill: display: block; width: 50px; height: 50px;"><g class="style-scope yt-icon"><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z" class="style-scope yt-icon"></path></g><span id = 'likes_num'>${article.likes}</span></svg>
     `;
     likes_box.appendChild(likes);
     article_body.appendChild(likes_box)
     const likeBtn = document.getElementById('like-btn')
     console.log(likeBtn)
     likeBtn.addEventListener('click', function(){
          const svg = document.getElementById('like-svg')

          const isActive = Array.from(svg.classList).includes('isActive')
          
          if(isActive == false){
               svg.classList.add('isActive')
               console.log(article_id); 
               db.collection('articles').doc(article_id).update({
                    likes: article.likes+1
               })
               .then (()=> {
                    document.getElementById('likes_num').innerText = article.likes+1;
               })
          }
          if(isActive == true){
               svg.classList.remove('isActive')
               db.collection('articles').doc(article_id).update({
                    likes: article.likes-1
               })
               .then (()=> {
                    document.getElementById('likes_num').innerText = article.likes;
               })
          }
          console.log(article.likes);
     })

     
     
}

function addLike() {
 
}

const user = JSON.parse( localStorage.getItem('user') )
document.getElementById('user_comment_name').innerHTML =
`
Leave a comment as: <b>${user.name} ${user.lastName}</b>
`
function saveComment() {
     const text = document.getElementById('comment_text').value

     if(text == null || text == ""){
          alert('Your comment is empty!!!!!!!!!!!!!!!!!!!!!!You are, so stuped');
          return;

     }
     const comment ={
          author: `${user.name} ${user.lastName}`,
          article_id,
          text: document.getElementById('comment_text').value
     }
     db.collection('comments').add(comment).then( res => {
          alert('Your comment is the best!')
          document.getElementById('comment_text').value = '';
     } )

     console.log(comment)
     console.log('hallo');
}
function getAllComments() {
     db.collection('comments').where('article_id', '==', article_id)
     .get()
     .then(res=>{
          res.forEach(doc => {
               drawComment(doc.data())
          })
})
}
function drawComment(comment) {
     const old_comments = document.getElementById('old_comments')

     const comment_box = document.createElement('div');

     comment_box.classList.add('comment');
     comment_box.classList.add('my-3')

     const h5 = document.createElement('h5');
     h5.innerText = comment.author;

     const p = document.createElement('p');
     p.innerText = comment.text;

     comment_box.appendChild(h5);
     comment_box.appendChild(p);

     old_comments.appendChild(comment_box)

}
getAllComments();
