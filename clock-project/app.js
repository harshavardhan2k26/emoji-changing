//element selection
const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")



function clock() {
    setTimeout(clock,1000)
    const currentTime= new Date()
    const currentHour=  (currentTime.getHours()/12)*360
    const currentMinute= (currentTime.getMinutes()/60)*360
    const currentSecond= (currentTime.getSeconds()/60)*360
 hourEl.style.transform = `rotate(${currentHour}deg)`
 minuteEl.style.transform = `rotate(${currentMinute}deg)` 
 secondEl.style.transform = `rotate(${currentSecond}deg)`
}
clock()