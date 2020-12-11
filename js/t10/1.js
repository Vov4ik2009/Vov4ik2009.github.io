let user_name = 'Володя Олійник';

let user_email = 'vova2019@gmail.com';

let hello = '';

let logged = true;

if(logged == true){
	hello = `Вітаю ${user_name}. На ваш email - <span class='red'>${user_email}</span> відправлено лист із підтвердженям.`;
}else{
	hello = `Будь ласка увійдіть у свій аккаунт, або створіть новий.`;
	user_name = `<a href='#'>Увійдіть</a>`;
	}


  
let name = document.getElementById('name');
let block_1 = document.getElementById('block_1');

console.log(name);

name.innerHTML = user_name;
block_1.innerHTML = hello;




