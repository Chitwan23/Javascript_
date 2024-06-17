let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#msg");
let turno = true;

const patternwin =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click" , () => {
        console.log("button clicked");
        if (turno){
            box.innerText="O";
            turno= false;
        }
        else{
            box.innerText="X";
            turno = true;
        }
        box.disabled=true;
        checkwinner();

    });

});

const checkwinner  = () => {
    for (pattern of patternwin){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;

       if (pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winneerrrr...." , pos1)
        }
        
       }

    }

}