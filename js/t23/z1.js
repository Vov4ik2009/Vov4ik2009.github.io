console.log(users)

function drawUsers(){
    const users_table = document.getElementById('users_table');

    let table_html = ``;

    users.map( function (user, index) {
         table_html += 
        `
        <tr>
					<td>${index + 1}</td>
					<td>${user.name}</td>
					<td>${user.email}</td>
					<td>
						<button class="btn btn-sm btn-primary" onclick='showModal("${user.id}")'>
							Детально
						</button>
					</td>
					<td>
                        <button class="btn btn-sm btn-danger" onclick='delUser(${index})'>Видалити</button>
					</td>
				</tr>
        `
    } )
    users_table.innerHTML = table_html;
}

function delUser(index){
    users.splice(index, 1);
    drawUsers();
}

const myModal = document.getElementById('myModal');

function showModal(id) {
    myModal.style.display = 'block';
    const user = findUser(id);
    
    const modal_body = document.getElementById('modal_body');
    const modal_footer = document.getElementById('modal_footer');
    
    modal_body.innerHTML = 
    `
            <p><b>Ім'я:</b>${user.name}</p>
			<p><b>Місто:</b>${user.address.city}</p>
			<p><b>Email:</b>${user.email}</p>
			<p><b>Телефон:</b>${user.phone}</p>
			<p><b>Сайт:</b>${user.website}</p>
			<p><b>Компанія:</b>${user.company.name}</p>
    
    `
   modal_footer.innerHTML = 
   `
    <button class="btn btn-sm btn-secondary" onclick="hideModal()">Скасувати</button>
    <a class="btn btn-sm btn-success" 
        href="https://www.google.com.ua/maps/@${user.address.geo.lat},${user.address.geo.lng},13.12z">
        Показати на карті
    </a>
    <a class="btn btn-sm btn-warning" href="mailto: ${user.email}">Написати email</a>
   `

}

function hideModal() {
    myModal.style.display = 'none';
}

function findUser(id) {
    const user = users.filter( function(user) {
        return user.id === id
    })
    return user[0]
}

drawUsers()