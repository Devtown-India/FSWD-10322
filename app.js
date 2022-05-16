const arr = [1,2,3,4,5,6]

const callback = (value,index)=>{
  if(value==99) return true
}

 const a = ()=>{}

const isPresent = arr.find(callback)
console.log(isPresent)

// const newArr = arr.filter((value,index) => value%2===0?true:false)
// console.log(newArr)

// const num = 10;

// const result = num%2===0 ? "even": "odd"
// console.log(result)

// if(num%2==0) console.log("even")
// else console.log("false")



// const Car = (brand,name)=>{
//   console.log(this)
//   this.name=name;
//   this.brand=brand;
// }

// const a = new Car("Mercedes","C300D")
// console.log(a)

// sum(1,5)
// // greet()


// function greet(){
//   console.log('hi')
// }


// const sum = function (a,b){
//   console.log(a+b)
// }


// for(let i =0;i<arr.length;i++){
//   console.log(arr[i])
// }

// let i = 0;

// while(i<arr.length){
//   console.log(arr[i])
//   i++;
// }

// do {
//   console.log(arr[i])
//   i++
// } while (i<arr.length-1);