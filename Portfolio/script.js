function realtimeClock(){

    
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let amPm = (hours < 12) ? "AM" : "PM";
     
    hours = ( hours < 12) ? hours  : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById("showTime").innerHTML = 
    hours + ":" + minutes + ":" + seconds + " " + amPm;
    let t = setTimeout(realtimeClock, 500);
    console.log("showTime");

}
realtimeClock();