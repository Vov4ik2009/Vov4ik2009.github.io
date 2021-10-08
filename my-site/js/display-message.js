function displayMessage(type, title, message, time){
    const box = document.createElement('div');
    box.classList.add('message-box');

    const content = document.createElement('div');
    content.classList.add('message-content');
    content.classList.add(type);

    const header = document.createElement('div');
    header.classList.add('message-header');
    header.innerText = title;

    const text = document.createElement('div');
    text.classList.add('message-text');
    text.innerText = message;
    
    const line = document.createElement('div');
    line.classList.add('message-time-line')

    content.appendChild(header)
    content.appendChild(text)
    content.appendChild(line)
    box.appendChild(content);
    document.body.appendChild(box);

    line.style.width = '100%';
    const diffrence = 1000 / time;

    let lineMove = setInterval(function(){
        
        line.style.width = `${Number(line.style.width.replace('%', '')) - diffrence}%`;
        
        if(Number(line.style.width.replace('%', '')) < 1){
            clearInterval(lineMove);
            document.body.removeChild(box);
        }

    }, 10)

}

//displayMessage('message-success', 'Message header', 'Some text for message', 4000);