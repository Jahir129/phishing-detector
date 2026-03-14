function showSection(id,element){

document.querySelectorAll(".section").forEach(sec=>{
sec.classList.remove("active")
})

document.getElementById(id).classList.add("active")

document.querySelectorAll(".sidebar li").forEach(li=>{
li.classList.remove("active")
})

element.classList.add("active")

}



function analyzeEmail(){

if(window.startScan){
window.startScan()
}

addTimeline("Scan started")

let text=document.getElementById("emailInput").value.toLowerCase()

let score=0
let indicators=[]

let keywords=[
"urgent","verify","password","bank","click here","login","reset","confirm"
]

keywords.forEach(word=>{

if(text.includes(word)){
score+=15
indicators.push("Keyword detected: "+word)
}

})

addTimeline("Keywords analyzed")

let urlPattern=/(https?:\/\/[^\s]+)/g
let urls=text.match(urlPattern)

if(urls){

urls.forEach(url=>{

if(url.includes("bit.ly")||url.includes("tinyurl")){
score+=25
indicators.push("URL shortener detected")
}

})

}

addTimeline("URLs inspected")

let risk="LOW"

if(score>70) risk="HIGH"
else if(score>30) risk="MEDIUM"

document.getElementById("score").innerText=score
document.getElementById("risk").innerText=risk

document.getElementById("meterFill").style.width=score+"%"

drawGauge(score)

document.getElementById("keywordRisk").innerText=indicators.length
document.getElementById("urlRisk").innerText=urls?urls.length:0

document.getElementById("keywordCount").innerText=indicators.length
document.getElementById("linkCount").innerText=urls?urls.length:0

if(score>70){
document.getElementById("alertBanner").classList.remove("hidden")
}else{
document.getElementById("alertBanner").classList.add("hidden")
}

let list=document.getElementById("indicators")
list.innerHTML=""

indicators.forEach(i=>{
let li=document.createElement("li")
li.innerText=i
list.appendChild(li)
})

addTimeline("Threat score calculated")

}



function drawGauge(score){

const canvas=document.getElementById("threatGauge")
const ctx=canvas.getContext("2d")

ctx.clearRect(0,0,200,200)

let angle=(score/100)*Math.PI

ctx.beginPath()
ctx.arc(100,100,80,Math.PI,Math.PI+angle)
ctx.lineWidth=15
ctx.strokeStyle="#e63946"
ctx.stroke()

ctx.font="30px Orbitron"
ctx.fillStyle="#111"
ctx.textAlign="center"
ctx.fillText(score+"%",100,110)

}



function addTimeline(event){

let li=document.createElement("li")

li.innerText=new Date().toLocaleTimeString()+" - "+event

document.getElementById("timeline").appendChild(li)

}



function analyzeHeaders(){

let text=document.getElementById("headerInput").value.toLowerCase()

let results=document.getElementById("headerResults")

results.innerHTML=""

if(text.includes("spf=fail")){
addHeader("SPF check failed")
}

if(text.includes("dkim=fail")){
addHeader("DKIM validation failed")
}

if(text.includes("dmarc=fail")){
addHeader("DMARC authentication failed")
}

}



function addHeader(msg){

let li=document.createElement("li")
li.innerText=msg
document.getElementById("headerResults").appendChild(li)

}



/* MATRIX BACKGROUND */

const canvas=document.getElementById("matrix")
const ctx=canvas.getContext("2d")

canvas.height=window.innerHeight
canvas.width=window.innerWidth

let letters="01".split("")
let fontSize=10
let columns=canvas.width/fontSize

let drops=[]

for(let x=0;x<columns;x++)
drops[x]=1

function draw(){

ctx.fillStyle="rgba(255,255,255,0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#ff2e2e"
ctx.font=fontSize+"px monospace"

for(let i=0;i<drops.length;i++){

let text=letters[Math.floor(Math.random()*letters.length)]

ctx.fillText(text,i*fontSize,drops[i]*fontSize)

if(drops[i]*fontSize>canvas.height&&Math.random()>0.975)
drops[i]=0

drops[i]++

}

}

setInterval(draw,33)