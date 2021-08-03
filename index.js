var rls = require('readline-sync');

var score = 0;
var highscore = 7;

var qna = [
  {
    q:'1. The USA won the most gold medals at the 1996 Olympic games, but in which city were they held? \n A. Lake Placid \n B. Atlanta \n C. Los Angeles \n D. St. Louis\n',
    a:'B'
  },
  {
    q:'2. The record for the most medals won by an Olympic athlete is 28. Who holds that record? \n A. Usain Bolt \n B. Mark Spitz \n C. Michael Phelps \n D. Paavo Nurmi \n',
    a:'C'
  },
   {
    q:'3. The Olympic Flame is lit in which ancient Greek city? \n A. Athens \n B. Olympia \n C. Delphi \n D. Heraklion \n',
    a:'B'
  },
   {
    q:'4. Which one of the following new sports will be included in the 2021 Tokyo Olympic Games? \n A. Darts \n B. Cricket \n C. Bowling \n D. Surfing \n',
    a:'D'
  },
   {
    q:'5. Jamaica entered the 1988 Winter Olympic Games for the first time competing in which sport? \n A. Alpine Skiing \n B. Figure Skating \n C. Bobsleigh \n D. Curling \n',
    a:'C'
  },
   {
    q:'6. The Rio 2016 Summer Olympics were the first to what? \n A. To include Samba dancing as a sport \n B. To be hosted in South America \n C. To award a solid gold medal \n D. To introduce sailing as a sport \n',
    a:'B'
  },
   {
    q:'7. London 2012 was the last time the city held the Olympic Games, but how many times has London hosted the games? \n A. 2 \n B. 3 \n C. 4 \n D. 5 \n',
    a:'B'
  },
   {
    q:'8. The Olympic gold medal must be made from what? \n A. Solid gold \n B. At least 92.5% silver and 7.5% gold \n C. 50% silver and 50% gold \n D. At least 5% gold \n',
    a:'B'
  },
   {
    q:'9. Which country has won the most medals at the Olympics since the first Olympic Games in 1986? \n A. USA \n B. Soviet Union \n C. China \n D. UK \n',
    a:'A'
  },
   {
    q:'10. Which Olympic Games were the first in the world to be televised? \n A. 1936 Munich \n B. 1948 London \n C. 1960 Rome \n D. 1964 Tokyo \n',
    a:'A'
  },
   
]

var name = rls.question('Please enter your name : ');
console.log('\nWelcome to the Olympics trivia quiz, ',name,'.');
console.log('\nTo answer a question, simply enter the alphabet for the correct option.\n');

for(var i=0; i<qna.length; i++){
  Game(qna[i].q, qna[i].a);
}

if(score>5 && score>highscore){
  console.log('Your score = ',score,'. Well done, you have set a new record for the highest score!');
  highscore=score;
}
else if(score>5 && score<highscore){
  console.log('Your score = ',score,'. Good, the highest score is ',highscore);
}
else{
  console.log('Your score = ',score,'. Highest score is ',highscore,', you might want to learn more about the Olympics.');
}
function Game(question, answer){
  var ans = rls.question(question);
  if( ans.toUpperCase() === answer){
    score+=1;
    console.log('Correct! Score = ', score);
  }
  else{
    console.log('Wrong, the correct answer is ', answer)
  }
}