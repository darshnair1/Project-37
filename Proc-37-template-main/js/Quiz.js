class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("The result of the quiz:", 225, 50);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined) {
      var displayAnswers = 230;
      fill("green");
      textSize(20);
      text("*NOTE: Contestants who answered correct are highlighted in green color!", 130, 230);
      for(var plr in allContestants){
        var correctAnswer = "2";
        if(correctAnswer === allContestants[plr].answer) {
          fill("#448900");
        }
        else{
          fill("red");
        
      
    }
    displayAnswers += 30;
    textSize(30);
    text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, displayAnswers);
    //write code to highlight contest who answered correctly
             }
        }
    
  }

}
