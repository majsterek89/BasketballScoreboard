let homeScoreEL = document.getElementById("home-score");
let homeScore = 0;

let guestScoreEL = document.getElementById("guest-score");
let guestScore = 0;

let leaderEL = document.getElementById("Actualleader");
let stringLeader = '';

let winEL = document.getElementById("leader");
let win = '';

let SetscoreWinEL= document.getElementById("scoreWinSet");
let incrementsScoreWIn=0;

let stop=false;

function Actualleader(){
    if(homeScore>guestScore) {
        stringLeader=" HOME";
        leaderEL.textContent=stringLeader;
    }
    else if(homeScore==guestScore){
        stringLeader=" TIE";
        leaderEL.textContent=stringLeader;
    }
    else{
        stringLeader=" GUEST";
        leaderEL.textContent=stringLeader;
    }
    
}

function Leader(){
    if((homeScore > guestScore) && (homeScore>=incrementsScoreWIn || guestScore>=incrementsScoreWIn) && (stop==false)) {
        win=" HOME"
        winEL.textContent=win;
        stop=true;
    }
    else if ((homeScore < guestScore) && (homeScore>=incrementsScoreWIn || guestScore>=incrementsScoreWIn) && (stop==false)) {
         win=" GUEST"
        winEL.textContent=win;
        stop=true;
    }
}

function homeIncrement(){
    homeScore+=1;
    homeScoreEL.textContent=homeScore;
    Actualleader();
    Leader();
}

function homeIncrement2(){
    homeScore+=2;
    homeScoreEL.textContent=homeScore;
    Actualleader();
    Leader();
}

function homeIncrement3(){
    homeScore+=3;
    homeScoreEL.textContent=homeScore;
    Actualleader();
    Leader();
}

/////////////////////////////////////////////////////////////////////////////////////////////////


function guestIncrement(){
    guestScore+=1;
    guestScoreEL.textContent=guestScore;
    Actualleader();
    Leader();
}

function guestIncrement2(){
    guestScore+=2;
    guestScoreEL.textContent=guestScore;
    Actualleader();
    Leader();
}

function guestIncrement3(){
    guestScore+=3;
    guestScoreEL.textContent=guestScore;
    Actualleader();
    Leader();
}


function resetScore() {
    homeScore=0;
    guestScore=0;
     homeScoreEL.textContent=homeScore;
     guestScoreEL.textContent=guestScore;
     stringLeader=""
     leaderEL.textContent=stringLeader;
     
    win="";
    winEL.textContent=win;
    stop=false;
}


function IncrementScoreWin(){
    incrementsScoreWIn+=1;
    SetscoreWinEL.textContent=incrementsScoreWIn;
    
}

function DecrementScoreWin() {
    if(incrementsScoreWIn>1)
    {
    incrementsScoreWIn-=1;
    }
    SetscoreWinEL.textContent=incrementsScoreWIn;
}