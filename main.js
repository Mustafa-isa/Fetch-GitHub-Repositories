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
    console.log(data)
})



}


}