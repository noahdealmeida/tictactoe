console.log('tictactoe.js loaded')

ttt = function(){
    // initializing
    console.log('initializing tic-tac-toe at '+Date())
    startDate.textContent=Date()

    ttt.prepareGame()
}

ttt.prepareGame=function(){
    ttt.board=document.getElementById('board')
    ttt.cellM=[]
    for(var i = 0 ; i <3 ; i++){
        ttt.cellM[i]=[]
        for(var j = 0 ; j <3 ; j++){
            ttt.board.rows[i].cells[j].textContent=`(${i},${j})`
            ttt.cellM[i][j]=ttt.board.rows[i].cells[j]
            ttt.cellM[i][j].onclick=ttt.clickedCell
        }
    }
    //debugger
}

ttt.turn = 'X'

ttt.clickedCell=function(){
    this.textContent=ttt.turn
    if(ttt.turn=='X'){
        ttt.turn='O'
    }else{
        ttt.turn='X'
    }
    ttt.checkVictory()
}

ttt.checkVictory=function(){
    // check for victory 
}


window.onload=ttt


