// // // //const button=document.querySelector('button')

// // // //button.classList.add('btn')


// // // //function message(){
// // //   //  alert("you have clicked the button")
// // // //
// // // //button.addEventListener('click', message)



// // // //button.removeEventListener('click', message)

// // // //const button=document.querySelector('#btn')
// // // //const button2=document.querySelector('#stop')
// // // //button.addEventListener('click', message)

// // // //button2.addEventListener('click',fucntion(){
// // //   //  button.removeEventListener('click',message)
// // // //})


// // // //const btn=document.querySelector(#btn)

// // // //btn.addEventListener('keyup',fucntion(event)({
// // //   //  console.log(event.key)

// // // //})
// // // // debugger
// // // //console.log(a)
// // // //console.log(b)


// // // //var a=78       //part of global scope
// // // //let b= 345      //stored in script scope 
// // // //console.log(a)
// // // //console.log(b)

// // // //function print(){
// // //   //let c=45
// // //   //console.log(c)
// // //   //console.log("Inside fn")
// // // //}

// // // //print()
// // // //debugger
// // // //f//unction first(){
// // //   //second()
  
// // // //}


// // // //let total = 100;

// // // //function calculate( ) {
// // // //console. log(total);
// // // //let total = 50;

// // // //calculate();

// // // //console.log("first Line")
// // // //setTimeout(()=>{
// // //   //console.log("after 2 sec")
// // // //},2000)
// // // //console.log("second line")

// // // //console.log("first Line")
// // // //setTimeout(()=>{
// // //   //console.log("after 2 sec")
// // // //},2000)
// // // //console.log("second line")

// // // //setTimeout()=>{
// // //   //alert{("ALERT AFTER 3 SEC")
// // // //,3000}
// // // //}


// // // //setTimeout(()=>{
// // //   //clearInterval(timer)
// // // //},10*1000)


// // // //let count = 1;

// // // //const interval = setInterval(() => {
// // //   //  console.log(count);

// // //     //if (count === 10) {
// // //       //  clearInterval(interval); // stop printing
// // //     //}

// // //    // count++;
// // // //}, 1000);


// // // // function print(){
// // // //   console.log("HELLO TEACHERS")
// // // // }

// // // // function greet(num){
// // // //   console.log("welcome to our class")
// // // //   setTimeout(()=>{
// // // //     console.log("INSIDE SET TIMEOUT")
// // // //     let firstname="alexa"
// // // //     num(firstname)
// // // //   },2000);
  
// // // // }
// // // //  greet(print)



// // // // console. log("Starting homework ... ");

// // // // setTimeout(( ) => {
// // // // console.log("Homework done!");
// // // // console.log("Starting dinner ... ");

// // // // setTimeout ( ( ) => {
// // // // console.log( "Dinner done!");
// // // // consolole.log("Getting ready to go out ... ");

// // // // setTimeout(() =>{
// // // // console.log( "Going to the playground!" );
// // // // }, 1000); // after Winner

// // // // }, 1500); // dinner tme

// // // // }, 2000); // homework time

// // // function finishHomework(callback) {
// // // console.log("Starting homework ... ");
// // // setTimeout(() => {
// // // console. log("Homework done!");
// // // callback();
// // // }, 2000);
// // // }

// // // function eatDinner(callback) {
// // // console. log("Starting dinner ... ");
// // // setTimeout(() =>{
// // // console. log("Dinner done!");
// // // callback();
// // // }, 1500);
// // // }
// // // function goToPlayground( ) {
// // // console. log("let's go to playground!");
// // // }
// // // // Chained in steps, but cleaner
// // // finishHomework(() => {
// // // eatDinner(() => {
// // // goToPlayground( );

// // // });
// // // });

// //  async function sendData(){
// //    const response=await fetch('https://dummyjson.com/products/add',{
// //      method: 'post',
// //      headers: { 'content-type': 'application/json'},
// //      body: JSON.stringify({
// //        title:"Macbook",
// //        description:"Macbook Pro",
// //        price:100000,
// //        discountpercentage:5,
// //        rating:4.5,
// //        stock:5,
// //        brand:"Apple",
// //      })
// //    })

// //    const data=await response.json()
// //    console.log(data)
// //  }catch(error){
// //    console.log("data not found")
// //  }

// //  sendData()


// // let obj={
// //   title:"Macbook",
// //   description:"Macbook Pro",
// // }


// // localStorage.setItem("obj",JSON.stringify(obj))
// // localStorage.setItem("name","Ankit")
// // localStorage.setItem("age",20)
// // console.log(localStorage.getItem("name"))
// // console.log(localStorage.getItem("age"))
// // console.log(JSON.parse(localStorage.getItem("obj")))


// // localStorage.removeItem("age")




// let obj={
//   title:"Macbook",
//   description:"Macbook Pro",
// }


// sessionStorageStorage.setItem("obj",JSON.stringify(obj))
// sessionStorage.setItem("name","Ankit")
// sessionStorage.setItem("age",20)
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(JSON.parse(sessionStorage.getItem("obj")))

// sessionStorage.removeItem("age")




if (data){
  const response=await fetch(' ')
  const weatherdata=await response.json()
  if(weatherdata.cod===200){
    weatherinfo.innerHTML= `<h3>weather info</h3>
    <p>city: ${weatherdata.name}</p>
    <P>temp: ${(weatherdata.main.temp-273).toFixed(1)}c</P>
    <p>weather: ${weatherdata.weather[0].main}</p>
    <p>humidity: ${weatherdata.main.humidity}</p>
    <p>speed: ${weatherdata.wind.speed}m/s</p>`
  if(historydata.includes(data)===(data)){
    
  }  
  }
}
