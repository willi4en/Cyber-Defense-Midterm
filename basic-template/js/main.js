//Time

function watchMaker() {
    time = time - 1;
    if (time >= 0) {
        document.getElementById("time").innerText = time;
    } else  {
        document.getElementById("time").innerText = "Game Over;-;";
    }
}

window.onload=function() {    
    //Info Boxes
    var time = document.getElementById("time");
    var scoreCard = document.getElementById("score");

    //Info 
    var score = 0;
    var index = 0;

    //Traffic Data
    var answers = [3,3,3,3,3,1,2,2,1,1,3,3,3,2,1,1,1,3,3,3,2,1,1,1,3,3,3,3,3,1,1,1,1,1,3,3,3,3,1,1,1,3,1,1];
    var levels = [1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,1.10,2.1,2.2,2.3,2.4,2.5,2.6,2.7,3.1,3.2,3.3,3.4,3.5,3.6,3.7,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,4.10,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,5.10];


    var x = setInterval(watchMaker(20), 1000)
    

    // Button Functionality
    var image = document.getElementById("traffic");
    var acceptBtn = document.getElementById("accept");
    acceptBtn.onclick = function() {
        if(answers[index] == 1) {
            score ++;
        } else {
            score --;
        }
        scoreCard.innerHTML = score;

        image.src = "TrafficExtensionPics/" + levels[index] + ".PNG"
        index++;
        clearInterval(x);
        x = setInterval(watchMaker(20),1000);
    }
    var rejectBtn = document.getElementById("reject");
    rejectBtn.onclick = function() {
        if(answers[index] == 3) {
            score ++;
        } else {
            score --;
        }
        scoreCard.innerHTML = score;

        image.src = "TrafficExtensionPics/" + levels[index] + ".PNG"
        index++;
    }
}

