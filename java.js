// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let integer_one = ["45","55"]
let i = 0
for ( i=0 ; i < integer_one.length; i++ ) {
    console.log(integer_one[i])
    if (integer_one[i] <=99 && integer_one[i] >= 50){
        console.log(true)
    }
    else{
        console.log(false)
    }
}


// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

integer_one.push("99")
for ( i=0 ; i < integer_one.length; i++ ) {
    console.log(integer_one[i])
    if (integer_one[i] <=99 && integer_one[i] >= 50){
        console.log(true)
    }
    else{
        console.log(false)
    }
}


// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a= 99
let b= 23
let c= 1000
if (a>b){
    b=a
}
if (b>c){
    c=b
}
console.log(c)
// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let old_string= "ton"
let addition= "py"
if(addition.concat(old_string).slice(0,2)=="py"){
    console.log(old_string)
}

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

if ((a+b>=50)&&(a+b<=80)){
    console.log("65")
}
else{
    console.log("80")
}

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let d = 24
let e = 16
if ((d+e==8) || (d-e==8) || (e-d==8)){
    console.log(true)
}

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let f = 15
let g = 5

if (f== 15 || g==15 || (f+g)==15 ){
    console.log(true)
}


// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let first = 5347
let second = 111

if (((second/11 % 1)||(second/7 % 1)||(first/11 % 1)(first/11 % 1))){
    console.log(true)
}

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let same= 11
let same_2=11
let sum = same+same_2
if (same== same_2){
    console.log(sum*3)
}


// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let specified = 22
let difference = specified-19
if (specified>19){
    console.log(difference*2)
}


// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc