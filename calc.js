function add(a,b){
  return a+b;
}
const sub = (a,b)=>{
  return a-b;
}

exports.mul = function mul(a,b) {
  return a*b
}

module.exports.add= add;
exports.sub= sub;