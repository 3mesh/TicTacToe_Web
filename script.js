

    
var X = '<i class="fa-solid fa-x" style="color: #005eff;"></i>'
var O = '<i class="fa-solid fa-o" style="color: #ff470a;"></i>'
var board = ['','','','','','','','','']
var isXplay = true;

    
        $(".box").click(function(){
    if($(this).html() === "")
    if(!checkdraw() && !checkWin("X") && !checkWin("O")){
        if(isXplay){
            $(this).append(X);
            var position = $(this).data("x");
            chosePos(position,"X");
            nextTurn()
            if(checkWin("X")){
                $("h1").html(X+" win");
                $("body").addClass("Xwin");
            }
            if(checkdraw())
            $("h1").text("DRAW");
        }else{
            $(this).append(O);
            var position = $(this).data("x");
            chosePos(position,"O");
            nextTurn()
            if(checkWin("O")){
                $("h1").html(O+" win");
                $("body").addClass("Owin");
            }
            
            if(checkdraw())
            $("h1").text("DRAW");
        }
    }
        
  });


  function checkdraw(){
    var draw = true;
    for(var i = 0; i < board.length ; i++){
        if(board[i] === "")
        draw = false;
    }

    return draw;
  }

  function nextTurn(){
    if(isXplay){
        isXplay = false;
        $("h1").html(O+" Turn")
    }else{
        isXplay = true;
        $("h1").html(X+" Turn")
    }
    
    
  }
  function chosePos(pos,player){
    board[pos] = player;
  }

  function checkWin(player){
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