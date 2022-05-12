const counter = document.querySelector('h1#counter')

function increment(){
    let val = counter.innerHTML
    val++
    counter.innerHTML=val
}


function decrement(){
    let val = counter.innerHTML
    if(val==0) return window.alert("Value is 0")
    val--
    counter.innerHTML=val
}

