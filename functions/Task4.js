even_odd = (item) =>{
    if(item % 2 ===  0){
        return (item + " is Even");
    }
    else{
        return (item + " is Odd");
    }
}
 let result = even_odd(11)
 let resulta = even_odd(12)
 console.log(result);
 console.log(resulta);