const todoaddbtn = document.querySelector('.todoadd');
const todoInput = document.querySelector('.todoinput');
const todocon =  document.querySelector('.todocontiner');


todoaddbtn.addEventListener('click', todoadd);

function todoadd(e) {

    e.preventDefault();
    if (todoInput.value.length!=0){
         
    const tododiv = document.createElement('div');
    tododiv.classList.add('todoitem');
    todocon.appendChild(tododiv)

    
    const todotextElement = document.createElement('li');
    todotextElement.classList.add('todotext');
    todotextElement.innerText= todoInput.value
    tododiv.appendChild(todotextElement);

    
    }
}