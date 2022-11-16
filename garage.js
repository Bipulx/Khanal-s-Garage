console.log("khul ja sim sim yrr ,vhai gadd fat rahi hain")

const dataone = document.getElementById("dataone")
const datatwo = document.getElementById("datatwo")
const datathreee = document.getElementById("datathree")
const datafour = document.getElementById("datafour")
const datafive = document.getElementById("datafive")
const datasix = document.getElementById("datasix")

const allbox = document.querySelectorAll(".boxes")
const alldata = document.querySelectorAll(".offer-customer")

dataone.addEventListener('click', ()=>{
//datafour.classList.("show")
datafour.style.display= 'block'
datafive.style.display = "none"
datasix.style.display = "none"
})

datatwo.addEventListener("click", ()=>{
//datafive.classList.toggle("show")
datafour.style.display= "none"
datafive.style.display = "block"
datasix.style.display = "none"
})

datathreee.addEventListener("click",()=>{
//datasix.classList.toggle("show")
datasix.style.display = "block"
datafour.style.display ="none"
datafive.style.display = "none"
})

const time = setTimeout(function(){
alldata.classList.add("show")
},3000)