function sayHi(){
	alert('Привіт!')
}

function greeting(name){
	alert(`Привіт ${name}!`)
}

greeting('Олег')

function showGreeting(name){
	const gg = document.getElementById("gg");
	
	gg.innerText = `Привіт ${name}!`;
}

showGreeting("Тарас");