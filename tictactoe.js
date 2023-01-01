var restart = document.querySelector("#b");

var squares = document.querySelectorAll("td");
var turn = 0

function clearBoard(){
    for (var i = 0; i < squares.length; i++){
        squares[i].textContent = "" ;
        squares[i].style.backgroundColor = "" ;
        turn = 0;
    }
}

restart.addEventListener('click',clearBoard)

function changeMarker(){
    if(this.textContent === '' && turn%2 === 0){
        this.textContent = "X";
        this.style.backgroundColor = "#FD0000";
        this.style.color = "white";
        turn++;
    }else if(this.textContent === "" && turn%2 === 1){
        this.textContent = "O";
        this.style.backgroundColor = "#00FAFE";
        this.style.color = "white";
        turn++;
    }else{

    }
}

for (var i = 0; i < squares.length ; i++){
    squares[i].addEventListener("click",changeMarker);
}