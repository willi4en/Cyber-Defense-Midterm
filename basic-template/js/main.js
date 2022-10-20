
window.onload=function() {
    var minusBtn = document.getElementById("minusButton"),
        plusBtn = document.getElementById("plusButton"),
        openBtn = document.getElementById("openButton"),
        closeBtn = document.getElementById("closeButton"),
        temperatureText = document.getElementById("temperature"),
        number = 0,
        min = 0,
        max = 64,        
        timeOpenArray = Array(),
        timeCloseArray = Array(),
        totalTimeArray = Array(),
        averageTimeOpened = 0,
        minTimeOpened = 0,
        maxTimeOpened = 0;

        openBtn.disabled = false;
        closeBtn.disabled = true;

        minusBtn.onclick = function() {
            if (number > min) {
                number = number - 1;
                temperatureText.innerText = number;
            }
            if (number == min) {
                temperatureText.style.color = "red";
                setTimeout(function() {temperatureText.style.color = "black"}, 500)
            }
            else {
                temperatureText.style.color = "black";
            }   
            return false;         
        }

        plusBtn.onclick = function() {
            if (number < max) {
                number = number + 1;
                temperatureText.innerText = number;
            }
            if (number == max) {
                temperatureText.style.color = "red";
                setTimeout(function(){temperatureText.style.color = "black"}, 500)
            }
            else {
                temperatureText.style.color = "black";
            }
            return false;
        }

        openBtn.onclick = function() {
            time = new Date()
            timeOpenArray.push(time.getTime());
            openBtn.disabled = true;
            closeBtn.disabled = false;
            return false;
        }

        closeBtn.onclick = function() {
            time = new Date()
            timeCloseArray.push(time.getTime());
            totalTimeArray.push(timeCloseArray[timeCloseArray.length - 1] - timeOpenArray[timeOpenArray.length - 1]);
            closeBtn.disabled = true;
            openBtn.disabled = false;

            averageTimeOpened = totalTimeArray.reduce((a, x) => a + x, 0) / totalTimeArray.length;
            maxTimeOpened = totalTimeArray.reduce((a,b) =>  Math.max(a,b), -Infinity);
            minTimeOpened = totalTimeArray.reduce((a,b) =>  Math.min(a,b), Infinity);

            return false;
        }

}

window.addEventListener("keypress", (event) => {
    window.alert("Fridge Opened");
}, false);


setInterval(startClock, 1000);
function startClock() {
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        session = "AM";

    if (hours == 0) hours = 12;
    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("clock").innerHTML = time;

}
startClock();