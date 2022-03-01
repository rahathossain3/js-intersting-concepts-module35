/* v-4
undefined- কোন করেনে ডিফাইন করা হয় নায়
1. variable ডিক্লেয়ার করা হলেও কোন মান সেট করা হয় না।
    variable value not assigned
2. function but didn't write return anything.
3. just wrote return but didn't return anything value. {লিখে কোন মান রির্টানা না করলে}
4. parameter didn't pass { parameter পাস না  করলে}
5. property that doesn't  in an object { অবজেক্ট এর ভিতরে প্রপাটি টা নাই}
6. accessing array element out of range {Range এর বাহিরে অ্যারের কোন উপাদানকে Acccess kora}
7. accessing delated array element
8. explicity set value to undefined {কোন ভ্যারিয়াবলের মান সরাসারি undefined সেট করলে}

Null- নাই
1. not assaign any value


*/

let first;
console.log(first);
function second(x, y) {
    const sum = x + y;
}
const result = second(3, 5)
// console.log(result)

function add(a, b) {
    const sum = x + y;

    return;
}