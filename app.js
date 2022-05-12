const counter = document.querySelector('h1#counter')

function increment(){
    let val = counter.innerHTML
    val++
    counter.innerHTML=val
}


function decrement(){
    console.log('dec')
}