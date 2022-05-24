const endpoint = "https://jsonplaceholder.typicode.com/todos"

const button = document.querySelector('button')
const list = document.querySelector('ol')

const fetchData = ()=>{
    fetch(endpoint)
    .then(stream=>stream.json())
    .then(todos=>{
        todos.map(todo=>{
            const listelement = document.createElement('li')
            listelement.innerHTML=todo.title
            const isCompleted = todo.completed
            if(isCompleted){
                listelement.style = "color:lime"
            }else{
                listelement.style = "color:crimson"
            }   
            console.log(listelement)
            list.appendChild(listelement)
        })
    })
}

button.addEventListener('click',fetchData)