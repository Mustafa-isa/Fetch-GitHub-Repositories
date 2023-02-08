const input =document.querySelector('input')
let btn =document.querySelector('.repo-header span')
let dataShaow =document.querySelector('.gitrerpo-showing')

btn.addEventListener('click' , gitData)
function gitData(){

if(input.value == ''){

dataShaow.innerHTML = `<span> please enter your User Name . </span>`


}else{


fetch(`https://api.github.com/users/${input.value}/repos`)
.then(rsponse =>{
    return rsponse.json()
})

.then(data =>{   
dataShaow.innerHTML =''
    for(let  i=0 ; i <data.length ; i++){
        console.log(data[i])
        let her =`https://api.github.com/users/${input.value}/${data[i].name}`
       dataShaow.innerHTML += ` <div class="main">
       <span>${data[i].name}</span>
       <div class="info">
           <span class="span1"> V:${data[i].visibility
} </span>
           <span class="span2"><a href= ${her}>visit</a></span>
       </div>
   </div>    `
    }
   
})



}


}