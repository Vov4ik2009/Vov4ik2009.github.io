const arr = [6, 8, 2 ,9, 1 ];

console.log(arr);

let max = arr[0];

let min = arr[0];

for(i = 0; i < arr.length; i++ ){
	
	if(arr[i]  > max){
		max = arr[i]; 
	}
	
	if(arr[i]  < min){
		min = arr[i]; 
	}
}
console.log(`MAX - ${max}`);
console.log(`MIN - ${min}`);