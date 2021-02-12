function saveText(){
	const text = document.getElementById('text').value
	
	localStorage.setItem('text', text);
	
	drawText()
}

function drawText(){
	const saved_text = localStorage.getItem('text');
	
	document.getElementById('stored_test').innerHTML = saved_text;
}

function deleteText(){
	localStorage.removeItem('text')
	document.getElementById('text').value = '';
	drawText()
}

function editText(){
	const saved_text = localStorage.getItem('text');
	
	document.getElementById('text').value = saved_text;
}

drawText()