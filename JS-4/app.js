function assignment1(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            console.log(`Number ${num} is found at index ${i}`);
            arr.splice(i, 1);
            console.log(`Array after removing ${num} is: ${arr}`);
        }
    }
}

assignment1([1, 2, 3, 4, 5, 6, 2, 3], 3);

function assignment2(number){
    let count = 0;
    while(number > 0){
        number = Math.floor(number / 10);
        count++;
    }
    console.log(`Number of digits in the given number are: ${count}`);
}

assignment2(123);

function assignment3(number){
    let sum = 0;
    while(number > 0){
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    console.log(`Sum of digits in the given number is: ${sum}`);
}

assignment3(123);

function assignment4(number){
    if(number <= 1){
        return 1;
    }

    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact *= i;
    }
    console.log(`Factorial of the given number is: ${fact}`);
}

assignment4(5);

function assignment5(arr){
    let max = arr[0];
    for(num of arr){
        if(num > max){
            max = num;
        }
    }
    console.log(`Maximum number in the given array is: ${max}`);
}

assignment5([2, 4, 6, 8, 10, 12]);