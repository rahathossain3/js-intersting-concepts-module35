/*
Falsy:
false
0
empty string ''
undefined
null
Nan

--------------------------
Truthytrue
any number(positive or negative)
any string (include single white space, ' ', '0')
[]
{}
Anything  else that  is nor false will be truthy

*/


const x = true;
// const x = false;
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}