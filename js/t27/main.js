function showModal(id){
	const modal = document.getElementById(id);
	modal.classList.add('show');
}

function hideModal(id){
	const modal = document.getElementById(id);
	modal.classList.remove('show');
}

function saveTask() {
    const task = {
        describe: document.getElementById('task_describe').value,
        status:   document.getElementById('task_status').value
    }

    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks) );

    hideModal('newTaskModal')
    drawTasks();
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    if(tasks === null){ tasks = [] }
    return tasks
}


function drawTasks(){
	const tasks = getTasks();
	let tasks_html = ``;

	tasks.forEach( function(task, index){
		let status = ``;
		if(task.status == "Виконується"){ status = `<b class="orange">Виконується</b>`}
		if(task.status == "Виконано"){    status = `<b class="lime">Виконано</b>`}
		if(task.status == "Провалено"){   status = `<b class="red">Провалено</b>`}

		tasks_html += 
		`
		<tr>
			<th scope="row">${index + 1}</th>
			<td>${task.describe}</td>
			<td>${status}</td>
			<td class="text-center">
            <button class="btn btn-warning btn-sm" onclick="editTasks(${index})">edit</button>            </td>
			<td class="text-center"><button class="btn btn-danger btn-sm" onclick="deleteTasks(${index})">x</button></td>
		</tr>
		`
	} );

	document.getElementById('list').innerHTML = tasks_html;
}


let edit_index = 0;

function editTasks(index){
    let tasks = getTasks();
    
    const task = tasks[index];

    showModal('editTaskModal');

    document.getElementById('edit_describe').value = task.describe;
    document.getElementById('edit_status').value = task.status;
    
    edit_index = index;
}

function saveEditTask(){
    let tasks = getTasks();

    const task = tasks[edit_index];
    
    task.describe =  document.getElementById('edit_describe').value;

    task.status =  document.getElementById('edit_status').value;
    
    tasks[edit_index] = task;

    localStorage.setItem('tasks', JSON.stringify(tasks) );
    drawTasks();

    hideModal('editTaskModal')
}


function deleteTasks(index){
   let tasks = getTasks();
   tasks.splice(index, 1);
   localStorage.setItem('tasks', JSON.stringify(tasks) );
   drawTasks();
}

drawTasks();