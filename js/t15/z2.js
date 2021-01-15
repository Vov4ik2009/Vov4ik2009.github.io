const user = {
    name: 'Petro',
	lastName: 'Ivanov',
	age: 17,
	email: 'PetroI.gmail.com',
	city: 'Lviv'
};

function showUser(){
	const user_data = document.getElementById('user_data');
	
	user_data.innerHTML = `
	<tr>
		<td>${user.name}</td>
		<td>${user.lastName}</td>
	    <td>${user.age}</td>
		<td>${user.email}</td>
		<td>${user.city}</td>
    </tr>
	`;
}

showUser();

function changeName(new_name){
	user.name = new_name;
	showUser();
}
function changeLastName(new_LastName){
	user.lastName = new_LastName;
	showUser();
}
function changeAge(new_Age){
	user.age = new_Age;
	showUser();
}
function changeEmail(new_Email){
	user.email = new_Email;
	showUser();
}
function changeCity(new_City){
	user.city = new_City;
	showUser();
}

function changeUserData(new_name, new_LastName, new_Age, new_Email, new_City){
	user.name = new_name;
	user.lastName = new_LastName;
	user.age = new_Age;
	user.email = new_Email;
	user.city = new_City;
	showUser();
}