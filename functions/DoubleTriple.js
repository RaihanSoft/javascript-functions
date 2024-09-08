double = (number , type)=>{
    if(type){
       let num =  number * number;
       return num;
    }
    else{
        let num =  number * number * number;
        return num;

    }
}
let result = double(10 , false)
console.log(result);