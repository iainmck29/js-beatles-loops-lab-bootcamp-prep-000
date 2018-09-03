function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}

function incrementVariable() {
  i = i + 1;
}


let i = 0
function johnLennonFacts(facts) {
  while (i < 5) {
    incrementVariable(i);
    
    facts[i] + "!!!";
  }
  return facts;  
}