let computerMove = '';

let score = JSON.parse(localStorage.getItem('score'));

if (!score) score = {
    wins: 0,
    losses: 0,
    ties: 0
};


function PlayGame(playerMove){
    let result = '';
    const x = Math.random();
    console.log(x);
    if(x < 1/3)
    {
        computerMove = 'Rock';
    }
    else if(x > 2/3)
    {
        computerMove = 'Scissors';
    }
    else computerMove = 'Paper';
    if(playerMove=='Rock')
    {
        if(computerMove=='Scissors') result = 'Win', score.wins+=1;
        if(computerMove=='Rock') result = 'Tie', score.ties+=1;
        if(computerMove=='Paper') result = 'Lose', score.losses+=1;
    }
    if(playerMove=='Paper')
    {
        if(computerMove=='Scissors') result = 'Lose', score.losses+=1;
        if(computerMove=='Rock') result = 'Win', score.wins+=1;
        if(computerMove=='Paper') result = 'Tie', score.ties+=1;
    }
    if(playerMove=='Scissors')
    {
        if(computerMove=='Scissors') result = 'Tie', score.ties+=1;
        if(computerMove=='Rock') result = 'Lose', score.losses+=1;
        if(computerMove=='Paper') result = 'Win', score.wins+=1;
    }

    document.

    localStorage.setItem('score', JSON.stringify(score));
}

function resetScore(){
    score.wins = score.losses = score.ties = 0;
    localStorage.removeItem('score');
}
