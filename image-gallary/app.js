//variable declaration

const prevEl = document.getElementById("prev")
const nxtEl = document.getElementById("nxt")
const icvEl = document.querySelector(".image-con")
let x =0


//event listners


prevEl.addEventListener("click", () => {
        prev()
},)
nxtEl.addEventListener("click", () => {
    next()
},)



//functions

function prev(){
    x=x+45
    icvEl.style.transform=`perspective(1000px) rotateY(${x}deg)`
}


function next() {
    x=x-45
    icvEl.style.transform=`perspective(1000px) rotateY(${x}deg)`
}


function time() {
  setTimeout( ()=>  {
    x=x-45
    icvEl.style.transform=`perspective(1000px) rotateY(${x}deg)`
    time()
},3000)
}

  time()