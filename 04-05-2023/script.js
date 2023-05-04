
let numbers = [ 10, 0, 6, 9, 1, 4, 5, 34, 6, 0, -255 ];

let the_min = numbers[0]; // 10
let the_max = numbers[0]; //10

for (let i = 1; i < numbers.length; i = i + 1) {
    if (numbers[i] < the_min) {
        the_min = numbers[i];
    }    
    if (numbers[i] > the_max) {
        the_max = numbers[i];
    }    
}


console.log(the_min)
console.log(the_max)

// 
/*
the_min = 10;

i = 1
i < 11 ? true

0 < 10 ? true
the_min = numbers[i] = numbers[1] = 0

i++ => i = 2
2 < 11 ? true
6 < 0 ? false

i++ => i = 3
3 < 11 ? true
9 < 0 ? false
....


i++ => i = 9 
9 < 11? true
0 < 0 ? false

i++ => i = 10
10 < 11 ? true
-255 < 0 ? true

the_min = -255

i++ => i=11
11 < 11 ? false
*/


let array = [10, 53, 454, 65, 16, 7, 91];

let array2 = [];

 for (let i = array.length - 1; i >= 0; i = i - 1) {
    array2.push(array[i]);

}

console.log(array2)



array = [10, 53, 454,12, 16, 7, 91];
let aux;


for (let i = 0; i < Math.floor(array.length / 2); i++) {
    aux = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = aux;
} 

console.log(array);


/*
array = [ 91, 7, 16, 454, 53, 10 ]
i = 3

aux = 454
array[i] = array[6 - 1 - i] = array[2] = 16
array = [ 91, 7, 16, 16, 53, 10 ]
array[l-1-i] = array[2] = 454
array = [ 91, 7, 454, 16, 53, 10 ]

i=4

array = [ 91, 53, 454, 16, 7, 10 ]


i=5

array = [ 10, 53, 454, 16, 7, 91 ]




*/
