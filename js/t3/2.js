const email = 'volik@gmail.com';
const user = 'vova';
const pass = 'vov4ik';

const email1 = prompt('ввести email')



if(email1 == email){
	const pass1 = prompt(`Введіть пароль для акаунту корстувача ${'user'}`)
	
	if (pass1 == pass){
   
		alert(`Вітаю ${user}`)
	}else{
		
		alert('Невірний пароль')	
	}
}else{
	alert('Користувача з таким email не інсує')
}