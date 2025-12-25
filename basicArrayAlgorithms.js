/* Reverse an array in place
    ex: Input: [1, 2, 3, 4]
    Output: [4, 3, 2, 1] */

function reverseArray(arr){
    let newArr = [];
    for(let i=0; i<arr.length;i++){
        newArr[(arr.length-1)-i] = arr[i];
        
    }
    return newArr;
}

/* Replace a value at a given index
Example:
Input: ([10, 20, 30], index = 1, value = 99)
Output: [10, 99, 30] */

function replaceValueAtIndex(arr, index, value){
    arr[index]=value;
    return arr;
}

/* Change all values in an array to a given element
Example:
Input: ([1, 2, 3], 0)
Output: [0, 0, 0] */

function changeAlltoElement(arr, value){
    for(let i =0; i<arr.length;i++){
        arr[i]=value;
    }
    return arr;
}

/* Remove the first element from an array (without using .shift())
Example:
Input: [5, 6, 7]
Output: [6, 7] */

function removeFirstElement(arr){
    let newArr=[];
    for(let i=0;i<arr.length-1;i++){
        newArr[i]=arr[i+1];
    }
    return newArr;
}

/* Find the largest number in an array
Example:
Input: [3, 9, 2, 5]
Output: 9 */

function findLargestNumber(arr){
    let num = arr[0];

    for(let i =1; i<arr.length; i++){
        if (arr[i]>num){
            num = arr[i];
        }
    }
    return num;
}

/* Count how many times a value appears
Example:
Input: ([1, 2, 2, 3, 2], 2)
Output: 3 */

function countValueFrequency(arr, value){
    count=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]===value){
            count++;
        }
    }
    return count;
}

/* Create a new array with only even numbers
Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6] */


/* function without using push */
function onlyEvenArrayConverter(arr){
    let newArr =[];
    let index =0;
    for (let i =0; i<arr.length; i++){
        if( arr[i]%2===0){
            newArr[index]=arr[i];
            index++;
        }
    }
    return newArr;
}

console.log(onlyEvenArrayConverter([1, 2, 3, 4, 5, 6]));
