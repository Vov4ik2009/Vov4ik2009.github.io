const arr_1 = [1, 3, 3, 4, 8, 3, 5, 5, 8];

const arr_2 = []

for( i=0; i < arr_1.length; i++){
	const num = arr_1[i];
	
	if(arr_2.indexOf( num ) === -1){
	   arr_2.push( num );
	}
	
}
arr_2.sort();
console.log(arr_1);
console.log(arr_2);
