// const stopWatch=document.getElementById("display");
// const playButton=document.getElementById("playButton");
// const pauseButton=document.getElementById("pauseButton");
// const resetButton=document.getElementById("resetButton");
// let startTime;
// let elapsedTime=0;
// let stopWatchInterval;
// playButton.addEventListener("click",startStopWatch);
// pauseButton.addEventListener("click",stopStopwatch);
// resetButton.addEventListener("click",resetStopwatch);
//  function startStopWatch(){
//     startTime=Date.now()-elapsedTime;
//    stopWatchInterval= setInterval(showTime,100);
//    function showTime(){
//     elapsedTime=Date.now()-startTime;
    
//     stopWatch.innerHTML=timetoString();
//    }
//    showButton();
//  }
//  function stopStopwatch(){
//     clearInterval(stopWatchInterval);
//     showButton();
//  }
//  function resetStopwatch(){
//     clearInterval(stopWatchInterval);
//     stopWatch.innerHTML="00:00:00:000";
//     showButton();
//  }
//  function timetoString(){
//     const hh=elapsedTime/3600000;
//     const HH=Math.floor(hh);
//     const str1=HH.toString();
//     const mm=(hh-HH)*60;
//     const MM=Math.floor(mm);
//     const ss=(mm-MM)*60;
//     const SS=Math.floor(ss);
//     const ms=Math.floor((ss-SS)*1000);
//     let timeString=  `${str1.padStart(2,"0")}:${MM.toString().padStart(2,"0")}:${SS.toString().padStart(2,"0")}:${ms.toString().padStart(3,"0")}`;
//     return timeString;
//  }
//  function showButton(){
//     if(pauseButton.style.display=='none'){
//         pauseButton.style.display='block';
//         playButton.style.display='none';
//     }else{
//         playButton.style.display='block';
//         pauseButton.style.display='none';
//     }
//  }
const stopwatch=document.getElementById("display");
const playButton=document.getElementById("playButton");
const pauseButton=document.getElementById("pauseButton");
const resetButton=document.getElementById("resetButton");

let startTime;
let elapsedTime=0;
let stopWatchInterval;

playButton.addEventListener("click",startStopWatch);
pauseButton.addEventListener('click',pauseStopWatch);
resetButton.addEventListener("click",resetStopWatch);

function startStopWatch(){
    startTime=Date.now();-elapsedTime;
    stopWatchInterval=setInterval(function(){
        elapsedTime=Date.now()-startTime;
        timeTostring(elapsedTime);
        showButton("Pause");
    })
}
function pauseStopWatch(){
    clearInterval(stopWatchInterval);
    showButton("Play");
  }
function timeTostring(time){
    let diffInHrs=time/(3600000);
    let hh=Math.floor(diffInHrs);

    let difInMin=(diffInHrs-hh)*60;
    let mm=Math.floor(difInMin);

    let diffInSec=(difInMin-mm)*60;
    let ss=Math.floor(diffInSec);

    let diffInMs=(diffInSec-ss)*1000;
    let ms=Math.floor(diffInMs);

    let formattedHH=hh.toString().padStart(2,'0');
    let formattedMM=mm.toString().padStart(2,'0');
    let formattedSS=ss.toString().padStart(2,'0');
    let formattedMS=ms.toString().padStart(3,"0");
    stopwatch.innerHTML=`${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}
function resetStopWatch(){
    clearInterval(stopWatchInterval);
    showButton("Play");
    stopwatch.innerHTML="00:00:00:000";
    elapsedTime=0;
}
function showButton(buttonKey){
    if(buttonKey==="Play"){
        playButton.style.display="block";
        pauseButton.style.display="none"
    }else{
        playButton.style.display='none';
        pauseButton.style.display="block";
    }
}

