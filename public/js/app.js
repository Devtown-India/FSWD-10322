const endpoint = "https://jsonplaceholder.typicode.com/todos"



const getData =  async ()=>{
    const response = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },5000)
    })
    // console.log(response)
    // console.log('hi')
    // await
    for(let i =0;i<10000;i++)console.log("hi")
}

getData()
console.log('something')