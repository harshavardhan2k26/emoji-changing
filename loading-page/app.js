const perEle = document.querySelector(".percentage")
const loaderEle = document.querySelector(".front-loader")
let count=0

function load() {
    
    if (count < 101) {
        perEle.innerHTML=`${count}%`
        loaderEle.style.width=`${count}%`
        count++
        setTimeout(load,20)
    }
    
}
load()