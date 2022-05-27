const endpoint = "https://jsonplaceholder.typicode.com/todos"



const getData =  async ()=>{

    try {
        const response = await fetch(endpoint)
        const jsonData = await response.json()
        console.log(jsonData)

    } catch (error) {
        console.log(error)
    }
}

getData()
// console.log('2')