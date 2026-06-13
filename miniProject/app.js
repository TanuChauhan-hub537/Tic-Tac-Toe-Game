let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let draw = document.querySelector("#draw");
// let drawContainer = document.querySelector(".draw-container");

let turnO = true; //player0, playerX

// let arr = [["potato", "tomato"], ["pants", "shirts"], ["apple", "litchi"]]; //This is going to be the approach

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "orange";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        // checkDraw();
    });
});
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner =(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner} 🥳🥳`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);             
            }
        }
    }
}

// const showDraw = () =>{
//     draw.innerText = "It's a Draw!! ⚖️ Click on New Game and  Play again to be the winner!!";
//     drawContainer.classList.remove("hidden");
// }
// const checkDraw = ()=>{
//     for(let pattern of winPatterns){
//         let pos1Val =  boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;
//         let pos4Val = boxes[pattern[3]].innerText;
//         let pos5Val = boxes[pattern[4]].innerText;
//         let pos6Val = boxes[pattern[5]].innerText;
//         let pos7Val = boxes[pattern[6]].innerText;
//         let pos8Val = boxes[pattern[7]].innerText;
//         let pos9Val = boxes[pattern[8]].innerText;

//         if(pos1Val != pos2Val || pos2Val != pos3Val && pos1Val != pos4Val || pos4Val != pos7Val && pos2Val != pos5Val || pos5Val != pos8Val && pos4Val != pos5Val || pos5Val != pos6Val && pos3Val != pos6Val || pos6Val != pos9Val && pos7Val != pos8Val || pos8Val != pos9Val ){
//                 showDraw();             
//             }
//     }
// }





newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);