/*
// ========== Variable dan Data Types ==========

var firstName = 'Ian';
console.log(firstName);

var lastName = 'Lombu';
console.log(lastName);

var age=30
console.log(age);

var fullAge = true;
console.log(fullAge);

// ========== Variable dan Data Types ========== 
*/

/*
======== VARIABLE MUTATION AND COERCION ========

var firstName = 'Citra Kemurnian'
var age = 25

console.log('First Name : ' + firstName + ' Umur : ' + age);

var job, isMarried;
job = 'Web Developer';
isMarried = false;

console.log(firstName + ' is a ' + job + ' Is he married ? ' + isMarried);

var lastName = prompt('Your Last Name')
console.log('His name is ' + firstName + ' ' + lastName);

======== VARIABLE MUTATION AND COERCION ========
*/

/*
====== BASIC OPERATOR ==========

var year, yearIan, yearSaduk;
now = 2020;
ageIan = 25;
ageSaduk = 23;

yearIan = now - ageIan;
yearSaduk = now - ageSaduk

console.log(yearIan);
console.log(yearSaduk);

// Logical Operator
var result = ageIan > ageSaduk
console.log(result);
console.log(typeof result);

====== BASIC OPERATOR ========== 
*/


var firstName = "Ian Lombu";
var age = 25;
age >= 18 ? console.log(firstName + ' Should be Police') : console.log(firstName + 'is a Student');

var role = 'use';
switch (role) {
    case 'admin':
        console.log('Welcome Admin');
        break;
    case 'users':
        console.log('Welcome User');
        break;
    default:
        console.log(`Are you Alien ?`);
        break;
}