const color = prompt('Який зараз колір?')

if( color == 'Зелений' || color == 'зелений'){
    alert(`Можна рухатись.`)

}else if(color == 'Жовтий' || color == 'жовтий'){
	alert(`Приготуйтесь.`)
	
}else if(color == 'Червоний' || color == 'червоний'){
    alert(`Стоп!.`)
}else{
	alert(`Помилка!`)
}