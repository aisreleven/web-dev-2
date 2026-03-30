// // // // function orderfood(){
// // // //     return new Promise{function(resolve, reject){
// // // //         setTimeout{()=>{
// // // //             console.log("food prepare")
// // // //             resolve("food delevered")

// // // //         }}
// // // //     }}
// // // // }


// // // function deleveredfood(){
// // //     return new promice(function(resolve,reject){

// // //     })
// // // }

// // // async function order(){
// // //     const data=await orderfood{}
// // //     console.log(data)
// // //     await preparefood()
// // //     await deliverfood()
// // // }

// // console.log("first line")
// // try{
    
// // }

// console.log(sample)
// catch(error){
    
// }


async function getdate(){
    try{
        const response=await fetch("https://dummyjson.com/products/200")
        console.log(response.ok)
        if(response.ok===false)throw new error("data not found")
            const data=await response.json()
        console.log(data)


        
    }
}