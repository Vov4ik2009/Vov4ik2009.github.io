const word = `кіт`;

const help = [
  'Домашня тварина.',
  'Ворог Джері.',
  'Любить молоко.'
]

let play = true;

let help_used = 0;

alert(`Слово на ${word.length} букви.${help[0]}`)

while(play){	
	const new_word = prompt(`Ввідгадайте слово!`)
	
	if(new_word === word){ play = false }
	
  if(help_used < 2 && play){
	  
	const need_help = confirm(`Вам потрібна підказка?`)
	
	if(need_help){ 
	alert(`${help[help_used + 1]}`)
	help_used++
	   }
	}
	
}
alert(`Перемога`)