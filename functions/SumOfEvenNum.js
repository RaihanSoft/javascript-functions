// ! Even Odd and return true false

function even(list) {
    let n = 0

    for(li of list){

        if(li%2=== 0){
            console.log(li);
            n +=li
            // console.log("total", n);
        }
    }
    return n;

}
let list = [11, 3, 66, 44, 22, 33 ,55 ,44 , 32 ];
let Total = even(list);
console.log("Total sum of even numbers is :", Total);

console.log("--------------------------------------------------");

let lists = [11, 3, 66, 44 ];
let Totals = even(lists);
console.log("Total sum of even numbers is :", Totals);

