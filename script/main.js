var activityBox = document.querySelectorAll(".activity-box");
var activityTitle = document.querySelectorAll(".activity-title");
var currentTime = document.querySelectorAll(".current-time");
var presentTime = document.querySelectorAll(".present-time");

var daily = document.getElementById("daily");
var weekly = document.getElementById("weekly");
var monthly = document.getElementById("monthly");


(function(){
    daily.className = "active";
    $.getJSON("data/data.json", function(data){
        for(var i = 0; i < activityBox.length; i++){
            activityTitle[i].textContent = data[0].title;
        }
    });
}());