/*
used this: https://masteringjs.io/tutorials/fundamentals/wait-1-second-then 

3x3 grid

-grid css

- First player picks either X or O and second player gets the other one

-event listener for each box in the grid
    - on click display an X or O depending on player turn

-box can only be changed once
    have a message if the box is already clicked

-win condition of 3 in a row 
    1) Horizontally -> If condition
    2) vertically -> If conditon
    3) Across -> If condition

Flip between player turns until win condition 
    Show who's turn it is

A reset button


*/
// Defining the urls 

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
let won = false;
let started = false;
let playerOneScore = 0;
let playerOneSymbol;
let playerTwoSymbol;
let playerTwoScore = 0;
let Xturn;
let playerTurn = 1;
Xurl = `x.svg.png`;
Ourl = `o.svg.png`;
// getting all of the boxes
let resetGameAndScoreButton = document.getElementById(`resetGameAndScore`);
let container = document.getElementById('container')
let Box1 = document.getElementById(`box1`);
let Box2 = document.getElementById(`box2`);
let Box3 = document.getElementById(`box3`);
let Box4 = document.getElementById(`box4`);
let Box5 = document.getElementById(`box5`);
let Box6 = document.getElementById(`box6`);
let Box7 = document.getElementById(`box7`);
let Box8 = document.getElementById(`box8`);
let Box9 = document.getElementById(`box9`);
let playerTurnHTML = document.getElementById(`playerTurn`);
let dialogBox = document.getElementById(`dialogBox`);
let xButton = document.getElementById(`xButton`);
let oButton = document.getElementById(`oButton`);
let resetButton = document.getElementById(`resetButton`);
let playerOneScoreHTML = document.getElementById(`playerOneScoreHTML`);
let playerTwoScoreHTML = document.getElementById(`playerTwoScoreHTML`);
resetButton.style.visibility = 'hidden';
container.style.visibility = 'hidden'
// Adding the event listenr to call my no repeat test function
Box1.addEventListener(`click`,x=>{
    noRepeatTest(Box1)
    delay(100).then(() => checkWinStatus());

});
Box2.addEventListener(`click`,x=>{
    noRepeatTest(Box2)
    delay(100).then(() => checkWinStatus());
});
Box3.addEventListener(`click`,x=>{
    noRepeatTest(Box3)
    delay(100).then(() => checkWinStatus());
});
Box4.addEventListener(`click`,x=>{
    noRepeatTest(Box4)
    delay(100).then(() => checkWinStatus());
});
Box5.addEventListener(`click`,x=>{
    noRepeatTest(Box5)
    delay(100).then(() => checkWinStatus());
});
Box6.addEventListener(`click`,x=>{
    noRepeatTest(Box6)
    delay(100).then(() => checkWinStatus());
});
Box7.addEventListener(`click`,x=>{
    noRepeatTest(Box7)
    delay(100).then(() => checkWinStatus());
});
Box8.addEventListener(`click`,x=>{
    noRepeatTest(Box8)
    delay(100).then(() => checkWinStatus());
});
Box9.addEventListener(`click`,x=>{
    noRepeatTest(Box9)
    delay(100).then(() => checkWinStatus());
});
xButton.addEventListener(`click`,x=>{
    Xturn = true;
    started = true;
    playerOneSymbol = `x`;
    playerTwoSymbol = `o`;

    playerOneName = document.getElementById("playerOneName").value;
    if(playerOneName == ``|| playerOneName == undefined){
        playerOneName= 'Player One'
    }
    playerTwoName = document.getElementById("playerTwoName").value;
    if(playerTwoName == ``|| playerTwoName == undefined){
        playerTwoName= 'Player Two'
    }

    playerOneScoreHTML.innerHTML=`${playerOneName}'s score: ${playerOneScore}`;
    playerTwoScoreHTML.innerHTML=`${playerTwoName}'s score: ${playerTwoScore}`;
    playerTurnHTML.innerHTML = `${playerOneName} ${playerTurn} turn: X`
    container.style.visibility = 'visible'
    dialogBox.close();
});
oButton.addEventListener(`click`,x=>{
    Xturn = false;
    started = true;
    playerOneSymbol = `o`;
    playerTwoSymbol = `x`;
    playerOneName = document.getElementById("playerOneName").value;
    if(playerOneName == ``|| playerOneName == undefined){
        playerOneName= 'Player One'
    }
    playerTwoName = document.getElementById("playerTwoName").value;
    if(playerTwoName == ``|| playerTwoName == undefined){
        playerTwoName= 'Player Two'
    }
    playerOneScoreHTML.innerHTML=`${playerOneName}'s score: ${playerOneScore}`;
    playerTwoScoreHTML.innerHTML=`${playerTwoName}'s score: ${playerTwoScore}`;
    playerTurnHTML.innerHTML = `${playerOneName} ${playerTurn} turn: O`
    container.style.visibility = 'visible'
    dialogBox.close();
});

resetButton.addEventListener('click',x=>{
    resetGame()
})

function resetGame(){
    Box1.innerHTML = '';
    Box2.innerHTML = '';
    Box3.innerHTML = '';
    Box4.innerHTML = '';
    Box5.innerHTML = '';
    Box6.innerHTML = '';
    Box7.innerHTML = '';
    Box8.innerHTML = '';
    Box9.innerHTML = '';
    if(Xturn == false){
        if(playerOneSymbol == `x`){
        playerTurnHTML.innerHTML = `${playerTwoName}'s turn: O`
        }
        else{
            playerTurnHTML.innerHTML = `${playerOneName}'s turn: O`
        }
    }
    else if(Xturn == true){
        if(playerOneSymbol == `x`){
        playerTurnHTML.innerHTML = `${playerOneName}'s turn: X`
        }
        else{
            playerTurnHTML.innerHTML = `${playerTwoName}'s turn: O`
        }
    }
    won = false;
    resetButton.style.visibility = 'hidden';
    playerTurn =1;
    
    //dialogBox.show();
}

resetGameAndScoreButton.addEventListener(`click`,x=>{
    resetGameAndScore();
    started = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerTurnHTML.innerHTML = ``
    playerOneScoreHTML.innerHTML=`${playerOneName}'s score: ${playerOneScore}`;
    playerTwoScoreHTML.innerHTML=`${playerTwoName}'s score: ${playerTwoScore}`;
    dialogBox.show();
})

function resetGameAndScore(){
    resetGame();

}
function addXorO (){
    // creating a new image 
    let XorO = document.createElement(`img`)
    XorO.setAttribute(`width`, `150px`);
    XorO.setAttribute(`height`, `160px`);
    if(Xturn == true){
    // if X's turn we set it to X
    XorO.setAttribute('src', Xurl);
    XorO.setAttribute('id', `x`);
    Xturn = false;
    }
    else{
        // if O's turn we set it to O
        XorO.setAttribute('src', Ourl);
        XorO.setAttribute('id', `o`);
        Xturn = true;
    }

    if(playerTurn==1){
        playerTurn = 2;
    }
    else if(playerTurn ==2){
        playerTurn = 1;
    }

    if(Xturn == false){
        if(playerOneSymbol == `x`){
        playerTurnHTML.innerHTML = `${playerTwoName}'s turn: O`
        }
        else{
            playerTurnHTML.innerHTML = `${playerOneName}'s turn: O`
        }
    }
    else if(Xturn == true){
        if(playerOneSymbol == `x`){
        playerTurnHTML.innerHTML = `${playerOneName}'s turn: X`
        }
        else{
            playerTurnHTML.innerHTML = `${playerTwoName}'s turn: X`
        }
    }
    return XorO
}
// testing if the box has been clicked
function noRepeatTest (box){
    // if it has let the user know that they can't
    if(started == false){
        prompt(`Please select a symbol`)
    }
    else{
    if(box.hasChildNodes()){
            prompt("You can't do that")
        }
        else{
        // call the AddXorO function that creates a image based on the turn and here we append
        // it to the current box that was passed into the function
        box.appendChild(addXorO());
    
    }
}
}


function checkWinStatus(){
    
    // check horizontals first
    // top 
    if(Box1.childNodes.length>0 && Box2.childNodes.length>0 && Box3.childNodes.length>0 && won == false){
        if(Box1.childNodes[0].id == `x` && Box2.childNodes[0].id == `x` && Box3.childNodes[0].id == `x`){
            
            if(playerOneSymbol == `o` && won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            else if(won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
            
        }
        else if(Box1.childNodes[0].id == `o` && Box2.childNodes[0].id == `o` && Box3.childNodes[0].id == `o`){
           
           
            if(playerOneSymbol == `o` && won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            else if(won == false) {
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
    }
    // middle
    if(Box4.childNodes.length>0 && Box5.childNodes.length>0 && Box6.childNodes.length>0 && won == false){
        if(Box4.childNodes[0].id == `x` && Box5.childNodes[0].id == `x` && Box6.childNodes[0].id == `x`){
         
            
            if(playerOneSymbol == `o` && won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            else if(won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
        else if(Box4.childNodes[0].id == `o` && Box5.childNodes[0].id == `o` && Box6.childNodes[0].id == `o`){
            
            
            if(playerOneSymbol == `o` && won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            else if(won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
    }
    // bottom
    if(Box7.childNodes.length>0 && Box8.childNodes.length>0 && Box9.childNodes.length>0 && won == false){
        if(Box7.childNodes[0].id == `x` && Box8.childNodes[0].id == `x` && Box9.childNodes[0].id == `x`){
           
            
            if(playerOneSymbol == `o` && won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            else if(won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
        else if(Box7.childNodes[0].id == `o` && Box8.childNodes[0].id == `o` && Box9.childNodes[0].id == `o`){
        
            
            if(playerOneSymbol == `o` && won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            else if(won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
    }
    // vertical at 1 spot
    if(Box1.childNodes.length>0 && Box4.childNodes.length>0 && Box7.childNodes.length>0 && won == false){
        if(Box1.childNodes[0].id == `x` && Box4.childNodes[0].id == `x` && Box7.childNodes[0].id == `x`){
          
            
            if(playerOneSymbol == `o` && won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            else if(won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
        else if(Box1.childNodes[0].id == `o` && Box4.childNodes[0].id == `o` && Box7.childNodes[0].id == `o`){
          
            
            if(playerOneSymbol == `o` && won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            else if(won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
    }
    // vertical at 2 spot
    if(Box2.childNodes.length>0 && Box5.childNodes.length>0 && Box8.childNodes.length>0 && won == false){
        if(Box2.childNodes[0].id == `x` && Box5.childNodes[0].id == `x` && Box8.childNodes[0].id == `x`){
          
            
            if(playerOneSymbol == `o` && won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            else if(won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
            
        }
        else if(Box2.childNodes[0].id == `o` && Box5.childNodes[0].id == `o` && Box8.childNodes[0].id == `o`){
       
            
            if(playerOneSymbol == `o` && won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            else if(won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
    }
     // vertical at 3 spot
     if(Box3.childNodes.length>0 && Box6.childNodes.length>0 && Box9.childNodes.length>0 && won == false){
        if(Box3.childNodes[0].id == `x` && Box6.childNodes[0].id == `x` && Box9.childNodes[0].id == `x`){
          
            
            if(playerOneSymbol == `o` && won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            else if(won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
        else if(Box3.childNodes[0].id == `o` && Box6.childNodes[0].id == `o` && Box9.childNodes[0].id == `o`){
          
            
            if(playerOneSymbol == `o` && won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            else if(won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
    }
     // Accross upper left to bottom right
     if(Box1.childNodes.length>0 && Box5.childNodes.length>0 && Box9.childNodes.length>0 && won == false){
        if(Box1.childNodes[0].id == `x` && Box5.childNodes[0].id == `x` && Box9.childNodes[0].id == `x`){
           
            
            if(playerOneSymbol == `o` && won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            else if(won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
        else if(Box1.childNodes[0].id == `o` && Box5.childNodes[0].id == `o` && Box9.childNodes[0].id == `o`){
          
            
            if(playerOneSymbol == `o` && won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            else if(won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
    }
    // Accross lower left to upper right
    if(Box7.childNodes.length>0 && Box5.childNodes.length>0 && Box3.childNodes.length>0 && won == false){
        if(Box7.childNodes[0].id == `x` && Box5.childNodes[0].id == `x` && Box3.childNodes[0].id == `x`){
           
            
            if(playerOneSymbol == `o` && won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            else if(won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
        else if(Box7.childNodes[0].id == `o` && Box5.childNodes[0].id == `o` && Box3.childNodes[0].id == `o`){
            
            
            if(playerOneSymbol == `o` && won == false){
                playerOneScore++
                prompt(`${playerOneName} wins!`);
            }
            else if(won == false){
                playerTwoScore++
                prompt(`${playerTwoName} wins!`);
            }
            resetButton.style.visibility = 'visible';
            won = true;
        }
    }
    // check if all all filled with no winner
    if(Box1.childNodes.length>0 && Box2.childNodes.length>0 && Box3.childNodes.length>0 
        && Box4.childNodes.length>0 && Box5.childNodes.length>0 && Box6.childNodes.length>0 
        && Box7.childNodes.length>0 && Box8.childNodes.length>0 && Box9.childNodes.length>0 && won == false){
            prompt(`It's a tie!`)
            resetButton.style.visibility = 'visible';
        
    }
    playerOneScoreHTML.innerHTML=`${playerOneName}'s score: ${playerOneScore}`;
    playerTwoScoreHTML.innerHTML=`${playerTwoName}'s score: ${playerTwoScore}`;
}