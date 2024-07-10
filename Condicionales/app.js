var x = 10;
var y = 10.5;

var z;

z = (x + y) + (x - y);
//(10+10.5)+(10-10.5)
//(20.5)+(-5)
//20

/////////////////////////////////////////////////////////////

var message = 'Hola';
var names = "John Doe";

var str = message + ' ' +names;
var str_ = message.concat(', ',names);


/////////////////////////////////////////////////////////////

const TAX = 18;
var total = 500;

var subtotal = 500 + ((total*TAX)/100);

/////////////////////////////////////////////////////////////

var state_one = true;
var state_two = false;

/////////////////////////////////////////////////////////////

var contries = [];

contries[0] = 'Canada';
contries[1] = 'Australia';
contries[2] = 'Germany';
 
/////////////////////////////////////////////////////////////

var user = {
    names : 'John',
    last_names : 'Doe',
    age: 25,
    email: 'john.doe@domain.com'
};

console.log(user.age);

//IF ELSE IF ELSE
//1-12 MORNING 13-18 AFTERNOOM 19-24 NIGHT
var hour = 10;

/* if(hour >=1 && hour <= 12){
    console.log('MORNING');
}else if(hour >= 13 && hour <= 18){
    console.log('AFTERNOOM');
}else if(hour >= 19 && hour <= 24){
    console.log('NIGHT');
}
else{
    console.log('La hora no tiene el formato correcto');
} */

if(hour >=1 && hour <= 12) console.log('MORNING');
else if(hour >= 13 && hour <= 18) console.log('AFTERNOOM');
else if(hour >= 19 && hour <= 24)console.log('NIGHT');
else console.log('La hora no tiene el formato correcto');

/* if(condition){
    what is executed
}else if(condition){
    what is executed
}else{
    what is executed
} */