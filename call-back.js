// function ke diye r ekta function ke call korra ke  call back funtion bole... 
// ekta funtion er parameter a r ekta funtion thake

function welcomeMessage(name, greatHandelar) {
    // console.log(greatHandelar);
    greatHandelar(name);
}
// const name = 'Tom hanks';
// const names = ['Tom hanks', 'tom vrady', 'Tom Cruis'];
// const myObj = { name: 'tom chunku', age: 11 };
function greetMorning(name) {
    console.log('good Morning', name);
}
function greetAfternoon(name) {
    console.log('good Afternoon', name);
}
function greetEveining(name) {
    console.log('good Evining', name);
}

welcomeMessage('tom Hanks', greetMorning);              // greetMorning add call back funtion 
welcomeMessage('sakib Hanks', greetAfternoon);          // greetAfternoon add call back funtion 
welcomeMessage('bapp Raj', greetEveining);          // greetEveining add call back funtion 


