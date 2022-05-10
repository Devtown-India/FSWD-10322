const doSomething = function(){
    console.log('d')
}

setTimeout(doSomething,0)

console.log('a')
console.log('b')
console.log('c')
for(let i =0;i<1000;i++){
    console.log('block')
}
