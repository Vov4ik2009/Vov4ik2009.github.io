const users = [

	"Андрусишин Олег",
	"Балицький Олексій",
	"Барановський Ігор",
	"Бей Тетяна",
	"Білас Всеволодимир",
	"Білоус Андрій",
	"Бордун Галина",
	"Буба Євген",
	"Вантух Володимир",
	"Васьків Роман",
	"Вервега Тарас",
	"Візняк Юрій",
	"Гагалюк Богдан",
	"Ганущин Олександр",
	"Гичка Михайло",
	"Гірняк Володимир",
	"Голуб Юрій",
	"Грабінський Ігор",
	"Грицик Ольга",
	"Гудима Юрій",
	"Дворянин Парасковія",
	"Дейнека Анатолій",
	"Демчина Роман",
	"Дзюдзь Михайло"
];

const users_table = document.getElementById('users_table');
const message     =  document.getElementById('message');

const name = prompt("Введіть ім'я - ");

let all_users = ``;

let user_num = 0;

for( i=0; i < users.length; i++ ){
	
	let gray = '';
	if(i % 2 > 0 ){
		gray = 'gray';
	}
	
	let checked = '';
	if( users[i].includes(name) ){checked = 'checked'; user_num++; }
	
	 all_users +=
	 `
	    <tr class='${gray}'>
					  <td class='num'>${i + 1}</td>
					  <td>${users[i]}</td>
					  <td class='letter'>
					  <input type="checkbox" ${checked}>
					  </td>
	    </tr>
	 `;
}

message.innerHTML = `Знайдено користувачів з ім'ям ${name} - ${user_num}`

users_table.innerHTML = all_users;


