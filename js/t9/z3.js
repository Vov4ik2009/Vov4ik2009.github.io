const arr_1 = [1, 6, 2, 8]

const arr_2 = [3, 5, 4, 7, 9]

const arr_3 = arr_1.slice();

for( i=0; i < arr_2.length; i++){
	
	const num = arr_2[i];
	
	if( arr_3.indexOf( num )=== -1){
		arr_3.push(num)
	}
	
}
console.log(arr_1);
arr_3.sort();
console.log(arr_3);