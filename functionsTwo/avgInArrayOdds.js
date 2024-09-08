// ! Calcutate the average of the odd and even numbers in An Array


display = (list) => {
    let sum = 0;
    let arr = []
    console.log(list);
  list.map((item) => {

   if(item % 2 === 1 ){

    arr.push(item)
   sum += item;

   
   }
  });
  console.log("odd numbers array lists :",arr);
  console.log("total sum of odd numbers : ",sum);
 
};

let list = [1, 2, 3, 5, 6, 7];
display(list);
