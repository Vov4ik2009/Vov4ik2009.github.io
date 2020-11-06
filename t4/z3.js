const age = prompt('Скільки вам років?');
const male = confirm('Ви хлопець?');
const helth = confirm('Ви здоровий?');

if(age >= 18 && male == true && helth == true){
	alert(`Ви пригодні для армії 11`)
}else if( age < 18 ){
	alert(`Ви не пригодні для армії по віку`)
}else if( male == false ){
	alert(`Ви не пригодні для армії по віку`)
}else if( helth == false ){
	alert(`Ви не пригодні для армії по здоров'ю`)
}else{
    alert(`Ви не пригодні для армії`)
}
