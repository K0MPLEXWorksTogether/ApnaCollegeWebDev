// Assignment Question - 1
let num = 20;
if(num % 10 == 0){
    console.log('Good');
}
else{
    console.log('Bad');
}

// Assignment Question - 2
let username = prompt('Enter your name.');
let age = prompt('Enter your age.');
alert(`${username} is ${age} years old.`);


// Assignment Question - 3
let quarterNumber = 3;
switch(quarterNumber){
    case 1:
        console.log('January, February, March');
        break;
    case 2:
        console.log('April, May, June');
        break;
    case 3:
        console.log('July, August, September');
        break;
    case 4:
        console.log('October, November, December');
        break;
    default:
        console.log('Invalid');
}

// Assignment Question - 4
let golden = 'Ananas';
if((golden[0] == 'A' || golden[0] == 'a') && golden.length > 5){
    console.log('Golden');
}
else{
    console.log('Not Golden');
}

// Assignment Question - 5
let num1 = 10;
let num2 = 20;
let num3 = 30;
if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

//Assignment Question - 6
let number1 = 123;
let number2 = 15323;
if(number1 % 10 == number2 % 10){
    console.log('True');
}
else{
    console.log('False');
}