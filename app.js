/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach winning points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,gamePlaying,sixAgain,winScore;
init();



//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';
// innerHTML method allows to change html of element selected whereas textcontent method only allows you to change plain text of selected element.





document.querySelector('.btn-roll').addEventListener('click',function() {
    
    if(gamePlaying){
                                                     
            //1). generate random number
             var dice1=Math.floor((Math.random())*6+1);
             var dice2=Math.floor((Math.random())*6+1);  

             
            //2).display the result
            document.querySelector('#dice1').style.display='block';
            document.querySelector('#dice2').style.display='block';
            
            document.getElementById('dice1').src='dice-'+dice1+ '.png';
            document.getElementById('dice2').src='dice-'+dice2+ '.png';

            //3) update roundSCore if rolled number is not 1
               /* if(dice===6 && sixAgain===6){
                    
                    scores[activePlayer]=0;
                    document.querySelector('#score-'+activePlayer).textContent='0';
                    nextPlayer();
                }else*/ if(dice1!==1 && dice2!==0){
                    roundScore =roundScore+ dice1+dice2;
                    document.querySelector('#current-'+activePlayer).textContent= roundScore;
                }else{
                    //Next player
                   nextPlayer();
                }
                    sixAgain=dice;
    }
})

function nextPlayer(){
    
 activePlayer===1?activePlayer=0:activePlayer=1;
        roundScore=0;
        
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;

        document.querySelector('.player-0-panel').classList.toggle('active');

        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('#dice1').style.display='none';
        document.querySelector('#dice2').style.display='none';

}
function holdClick(){
    if(gamePlaying){
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    winScore=document.getElementById('winScore').value;
    
   
    if(scores[activePlayer]>=winScore){
        document.querySelector('#name-'+activePlayer).textContent='WINNER..!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }else{
        nextPlayer();
    }
        
}}
document.querySelector('.btn-new').addEventListener('click',init);
    
 



function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='PLAYER 1';
    document.getElementById('name-1').textContent='PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}

/*document.getElementById('winbutton').addEventListener('click',function(){
    console.log("lgjusgljGhlf");
    winScore=document.getElementById('myNumber').value;
    console.log(winScore);
    
});*/
                                        
                                            
                                                         
                                                


                                                    