//create an array of words
var words = ['maui', 'mexico', 'paris', 'italy', 'florida', 'beach']
//choose word randomly
var randomNumber = Math.floor(Math.random() * words.length);
var rightWords = [];
var wrongWords = [];
var choosenWord = words[randomNumber];
console.log(choosenWord);
var underScore = [];
var underScoreDOM = document.getElementsByClassName('underScore')
//create underscores based on words
var generateUnderscore = () => {
    for(var i = 0; i < choosenWord.length; i++) {
    underScore.push('_');
   
    }
    return underScore;
}
console.log(generateUnderscore());
//get user choice
document.addEventListener('keypress', (event) =>{
    var keyCode = event.keyCode;
   var keyWord = String.fromCharCode (keyCode);
   console.log(keyWord);
   console.log(choosenWord.indexOf(keyWord));
   //check against the word array 
   if(choosenWord.indexOf(keyWord) > -1) {
  
    console.log(underScore);
    //if correct push to right array 
    rightWords.push(keyWord);
    underScoreDOM.innerHTML = underScore;
    underScore[choosenWord.indexOf(keyWord)] = keyWord;
  if(underScore.join('') == choosenWord) {
      alert('you win');
  }
    console.log(underScore);
    console.log(rightWords);
   }
   else{
    wrongWords.push(keyWord);
    console.log(wrongWords);
        }
    });
    underScoreDOM[0].innerHTML = generateUnderscore().join('');

//if wrong push to wrong array
