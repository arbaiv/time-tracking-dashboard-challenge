var activityBox = document.querySelectorAll(".activity-box");
var activityTitle = document.querySelectorAll(".activity-title");
var currentTimeEl = document.querySelectorAll(".current-time");
var previousTimeEl = document.querySelectorAll(".previous-time");
var navbar = document.querySelector("#navbar ul");
var navLinks = document.querySelectorAll("#navbar ul a");

(function (){
    for(var j = 0; j < navLinks.length; j++){
        navLinks[j].className = "";
    }
    navLinks[0].className = "active";
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            for(var i = 0; i < activityBox.length; i++){
                var data = JSON.parse(xhr.responseText);
                var title = data[i].title;
                var currentTime = data[i].timeframes.daily.current;
                var previousTime = data[i].timeframes.daily.previous;
                activityTitle[i].textContent = title;
                currentTimeEl[i].textContent = currentTime + "Hrs";
                previousTimeEl[i].textContent = "Yesterday - " + previousTime + "Hrs";
            }
        }
    };
    xhr.open("GET", "../data/data.json", true);
    xhr.send(null);
}());

navbar.addEventListener("click", function(e){
    loadTimeframe(e);
});
function loadTimeframe(e){
    if(e.target.hasAttribute("href")){
        e.preventDefault();
        var activeTime = e.target.id;
        for(var j = 0; j < navLinks.length; j++){
            navLinks[j].className = "";
        }
        e.target.className = "active";
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status === 200){
                var data = JSON.parse(xhr.responseText);
                var title, currentTime, previousTime;
                for(var i = 0; i < activityBox.length; i++){
                    switch(activeTime){
                        case "daily":
                            title = data[i].title;
                            currentTime = data[i].timeframes.daily.current;
                            previousTime = data[i].timeframes.daily.previous;
                            activityTitle[i].textContent = title;
                            currentTimeEl[i].textContent = currentTime + "Hrs";
                            previousTimeEl[i].textContent = "Yesterday - " + previousTime + "Hrs";
                            break;
                        case "weekly":
                            title = data[i].title;
                            currentTime = data[i].timeframes.weekly.current;
                            previousTime = data[i].timeframes.weekly.previous;
                            activityTitle[i].textContent = title;
                            currentTimeEl[i].textContent = currentTime + "Hrs";
                            previousTimeEl[i].textContent = "Yesterday - " + previousTime + "Hrs";
                            break; 
                        case "monthly":
                            title = data[i].title;
                            currentTime = data[i].timeframes.monthly.current;
                            previousTime = data[i].timeframes.monthly.previous;
                            activityTitle[i].textContent = title;
                            currentTimeEl[i].textContent = currentTime + "Hrs";
                            previousTimeEl[i].textContent = "Yesterday - " + previousTime + "Hrs";
                            break;     
                        default: 
                            title = data[i].title;
                            currentTime = data[i].timeframes.daily.current;
                            previousTime = data[i].timeframes.daily.previous;
                            activityTitle[i].textContent = title;
                            currentTimeEl[i].textContent = currentTime + "Hrs";
                            previousTimeEl[i].textContent = "Yesterday - " + previousTime + "Hrs";
                            break;  
                    }

                }
            }
        };
        xhr.open("GET", "../data/data.json", true);
        xhr.send(null);
    }
}