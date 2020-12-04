const arr = [];

let i = 0;

while( arr.length < 5 ){
	
	const num = Number( prompt('Введіть число!'))
	arr.push(num)
}
console.log(`Початковий масив - [ ${arr}]`)

arr.sort()

console.log(`Масив в зрост. порядку- [ ${arr}]`)

arr.reverse()

console.log(`Масив в cпад. порядку- [ ${arr}]`)
