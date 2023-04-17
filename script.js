var board = ['','','','','','','','','']

    var game = document.getElementsByClassName("col-xs-4 box")[2]
    $(X).appendTo($(".bos")[2])
    var col = $('#n3')
    var X = '<i class="fa-solid fa-x" style="color: #005eff;"></i>'
    var O = '<i class="fa-solid fa-o" style="color: #ff470a;"></i>'
    var player1 = X
    var player2 = O
    var currentPlayer = true;
    var turn = 4
    function ava(mark){
        if(board[4] != '')
            return false
        return true
    }

    function chose(event,Pos){
        var id = "g"+Pos;
        
        $("#n3").html(Pos)
        var el = $(id)
        $(player1).appendTo(el)
        if(currentPlayer){
            var id = "#n"+Pos
            var el = $(id)
            $(player1).appendTo(el)
            currentPlayer = false
        }
        else{
            var id = "#n"+Pos
            var el = $(id)
            $(player2).appendTo(el)
            currentPlayer = true
        }

    }
    
    function check(Pos){
        for(var i ; i< $(".box").length;i++){
            if(Pos == $(".box")[i]){
                return false
            }

        }
        return true

    }
    $(".box").click(function(event){
        
        if(check($(".box")[2]))
        $(X).appendTo($(".box")[2])
        
        if(currentPlayer){
            var domElement = $( this ).get( 0 );
            $(player1).appendTo(domElement)
            currentPlayer = false
        }else{
            var domElement = $( this ).get( 0 );
            $(player2).appendTo(domElement)
            currentPlayer = true

        }
                

  })