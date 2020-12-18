let days = ``;

for(i=1; i < 32; i++){
	
	if(i % 7 == 0 || (i+1) % 7 == 0){
	days+= `<div class="day gray">${i} Січня</div>`    
	}else{
	days+= `<div class="day">${i} Січня</div>`
	}
}

const month = document.getElementById('month');

month.innerHTML = days;