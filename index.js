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


function johnLennonFacts(arr) {
  var result= []; 
  var i = 0;
while(i < arr.length) {
    result.push(arr[i] + '!!!')
    i++; 
  }
  return result; 
 }