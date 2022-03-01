/* 

35-6 Block scope, global scope, Hoisting

== শুধু value chack kore
=== value + type উভয় েচেক করে

*/

const first = 2;
const second = '2';
if (first === second) {
    console.log('condition is true');
}
else {
    console.log('condition is false');
}

// more conmparison  not suport === or == 
// const a = { name: 'ali' }
// const b = { name: 'ali' }
const a = []
const b = []

if (a === b) {
    console.log('they are same');
}
else {
    console.log('they are not same');
}