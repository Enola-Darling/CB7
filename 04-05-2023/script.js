
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


