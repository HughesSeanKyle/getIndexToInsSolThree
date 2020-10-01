/*
Basic Algorithm Scripting: Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

//Solution Three
function getIndexToIns(arr, num) {                  //1
  arr.sort(function(a, b) {                         //2
    return a - b;                                   //3
  });

  var i = 0;                                        //4
  while (num > arr[i]) {                            //5
    i++;                                            //6
  }

  return i;                                         //7
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));
//Output = 2 
 
 



//Notes
/*

//1
Function which takes in two arguments: 
  Arg1: An Array
  Arg2: A number/Integer

//2, //3
The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

Source - [https://devdocs.io/javascript/global_objects/array/sort]

The sort method will return the original array sorted from lowest to highest. The sort order is determined by the return statement. If the return statement were to be b - a the sort order would be from highest to lowest.

//4 
variable i initialized to 0;

//5, //6
The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

Source - [https://devdocs.io/javascript/statements/while]

The while loop will check if the input num (5 in this case) is greater than the each item in the sorted array [3, 3, 5, 20]. If it is greater, the variable i, initially initialized as 0 will be incremented. Therefore, if num is lower than the lowest value in the array i will not increment and will subsequently be equal to the zero index, conversely, if num is higher than the highest value in the array a new index value for that num will be "created".

//7
The return statement will return with the index value where the num belongs in the sorted array.  

*/

