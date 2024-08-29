console.log("hello world");
let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-button");
let turnO = true;
let newGameButton=document.querySelector("#new-button");
let messageContainer=document.querySelector("#message-container");
let message=document.querySelector("#msg");
const winningPatterns =[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
         checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`congratulations , winner is ${winner}`;
    message-container.classList.remove("hide");
}
const disableBoxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innertext="";
        message-container.classList.add("hide");
        
    }
}  
const resetGame=()=>{
    turnO=true;
    enableButton();
}
 
}
const checkWinner = ()=>{
    for (let pattern of winningPatterns){
       // console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let position1=boxes[pattern[0]].innerText;
    let position2=boxes[pattern[1]].innerText;
    let position3=boxes[pattern[2]].innerText;

    if(position1 !="" && position2!="" && position3!=""){
        if(position1===position2 && position2===position3){
            console.log("winner", position1);
            disableBoxes();
            showWinner(position1);

        }
    }
   }
};
newGameButton.addEventListener("click",()=>{
    turnO=true;
    enableButton();
});

