const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () =>{
    console.log('Важное сообщение в консоли')
})

document.querySelector('#alert').addEventListener('click', () => {
    alert('Здравствуйте!');
})

document.querySelector('#prompt').addEventListener('click', () => {
    prompt('Как Вас Зовут?')
})