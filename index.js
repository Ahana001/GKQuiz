var readlineSync = require('readline-sync');
var score = 0;
var questionArray = [
    {
       question : "Who is the Father of our Nation? ",
       answer : "Gandhiji"
    },
    {
       question: "Which is the most sensitive organ in our body? ",
       answer: "Skin"
    },
    {
       question: "Which is the heavier metal of these two? Gold or Silver? ",
       answer: "Gold"
    },
    {
       question: "Name the game which is played with bat, ball and wicket? ",
       answer: "Cricket"
    }
];

function play(arr){
    var userAns = readlineSync.question(arr.question);
    if(userAns.toUpperCase() === arr.answer.toUpperCase()){
        console.log("You are Right!!");
        score = score + 1;
    }else{
        console.log("You are Wrong!! Answer is : ", arr.answer);
        score = score - 1 ;
    }
    return score;
}
for(let i=0; i<questionArray.length; i++){
    play(questionArray[i]);
}

console.log("Your score is : ", score);