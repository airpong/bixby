module.exports.function = function rolldice (dicenum,sidenum) {
  const console = require('console');
  var result = 0;
  var tmp = 0;
  for(let i=0;i<dicenum;i++){
    tmp = Math.floor(Math.random() * sidenum) + 1;
    console.log(tmp);
    result += tmp;
  }
  
  return result;
}
