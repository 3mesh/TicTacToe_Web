

    
var X = '<i class="fa-solid fa-x" style="color: #005eff;"></i>';
var O = '<i class="fa-solid fa-o" style="color: #ff470a;"></i>';
var board = ['','','','','','','','',''];
var isXplay = true;
var isAIplay = false;

$("header").click(function(){
    $("#option-list").css("display","block");
    $("#game").css("display","none");
    restartGame(false);
})   
$(".option").click(function(){

    if($(this).data("o") === 2){
        $("#option-list").css("display","none");
        $("#game").css("display","block");
        playTwoPlayer();
    }else{
        $("#option-list").css("display","none");
        $("#game").css("display","block");
        isAIplay = true;
        playTwoPlayer();
    }
  });
     

    function playTwoPlayer(){
        $(".box").click(function(){
            if($(this).html() === ""){
            if(!checkdraw(board) && !checkWin(board,"X") && !checkWin(board,"O")){
                if(isXplay){
                    $(this).append(X);
                    var position = $(this).data("x");
                    chosePos(board,position,"X");
                    nextTurn()
                    if(checkWin(board,"X")){
                        
                        $(".title").html(X+" win");
                        $("body").addClass("Xwin");
                        $(".again").html("Press anywhere in the board to play again");
                        if(isAIplay)
                        $(".title").html(X+" win vs AI");
                    }else if(checkdraw(board))
                    $(".title").text("DRAW");

                    if(isAIplay && avilible())
                    aiMove();
                }else{
                    if(!isAIplay){
                        $(this).append(O);
                    var position = $(this).data("x");
                    chosePos(board,position,"O");
                    nextTurn()
                    if(checkWin(board,"O")){
                        $(".title").html(O+" win");
                        $("body").addClass("Owin");
                        $(".again").html("Press anywhere in the board to play again");
                    }else if(checkdraw(board))
                    $(".title").text("DRAW");
                    }else{
                        
                    }
                    
                }
            }else{
                board = ['','','','','','','','',''];
                isXplay = true;
                $(".box").html("");
                $("body").removeClass();
                $(".title").html(X+" Turn");
                
        
                
            }}else if ($(this).html() !== "" && !(!checkdraw(board) && !checkWin(board,"X") && !checkWin(board,"O"))){
                restartGame(isAIplay);
            }
                
          });
    }
    
    function restartGame(AI){
        board = ['','','','','','','','',''];
                isXplay = true;
                $(".box").html("");
                $("body").removeClass();
                $(".title").html(X+" Turn");
                $(".again").html("");
                isAIplay = AI;
    }
  

  
    function aiMove(){
        var bestScore = -100;
        var moveI = 0;
        for(var i = 0; i<9;i++){
            if(board[i] === ""){
                board[i] = "O";
                var score = minMax(board,0,false);
                board[i] = "";
                if (score > bestScore){
                    bestScore = score;
                    moveI = i;
                }
            }
        }
        setTimeout(function(){
            var AiPos = moveI+1;
            $("#n"+AiPos).append(O);
            chosePos(board,moveI,"O");
            nextTurn()
            if(checkWin(board,"O")){
            $(".title").html("AI win");
            $("body").addClass("Owin");
            $(".again").html("Press anywhere in the board to play again");
                    }
        },1000)
            
        return moveI;
    }
    function minMax(newBoard,depth,isMaximizing){
        
        if(checkWin(newBoard,"O"))
        return 1;
        if(checkWin(newBoard,"X"))
        return -1;
        if(checkdraw(newBoard))
        return 0;

        if(isMaximizing){
            var bestScore = -100;
            for(var i = 0; i<9;i++){
                if(newBoard[i] === ""){
                    newBoard[i] = "O";
                    var score = minMax(newBoard,depth+1,false);
                    newBoard[i] = "";
                    if (score > bestScore){
                        bestScore = score;
                        moveI = i;
                    }
                }
            }return bestScore;
        }else{
            var bestScore = 100;
            for(var i = 0; i<9;i++){
                if(newBoard[i] === ""){
                    newBoard[i] = "X";
                    var score = minMax(newBoard,depth+1,true);
                    newBoard[i] = "";
                    if (score < bestScore){
                        bestScore = score;
                        moveI = i;
                    }
                }
            }return bestScore;
        }
    }

  function checkdraw(newBoard){
    var draw = true;
    
    for(var i = 0; i < newBoard.length ; i++){
        if(newBoard[i] === "")
        draw = false;
    }

    return draw;
  }

  function nextTurn(){
    if(isXplay){
        isXplay = false;
        $(".title").html(O+" Turn")
    }else{
        isXplay = true;
        $(".title").html(X+" Turn")
    }
    
    
  }
  function chosePos(board,pos,player){
    board[pos] = player;
  }

  function checkWin(board,player){
    //v
    if(board[0] === board[1] && board[1] === board[2] && board[2] === player){
        return true;
    }
    if(board[3] === board[4] && board[4] === board[5] && board[5] === player){
        return true;
    }
    if(board[6] === board[7] && board[7] === board[8] && board[8] == player){
        return true;
    }

    //h
    if(board[0] === board[3] && board[3] === board[6] && board[6] == player){
        return true;
    }
    if(board[1] === board[4] && board[4] === board[7] && board[7] == player){
        return true;
    }
    if(board[2] === board[5] && board[5] === board[8] && board[8] == player){
        return true;
    }


    if(board[0] === board[4] && board[4] === board[8] && board[8] == player){
        return true;
    }
    if(board[2] === board[4] && board[4] === board[6] && board[6] == player){
        return true;
    }
    return false;



  }

  function avilible(){
    var f = false;
    for(var i = 0;i<board.length;i++){
        if(board[i] === "")
        f = true;
    }
    return f;
  }