function StringPara(name) {
  let nam = name.length;
  if(nam % 2 === 0){
    console.log("Number is Even :", nam);
    return true;
  }
  else{
    console.log("Number is Odd :", nam);
    return false;
  }
}
let name = "Raihan Baee";
let na = StringPara(name);
console.log(na);
