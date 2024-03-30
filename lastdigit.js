var num1 = 140
var num2 = 131
var num3 = 151


var remainder1 = num1%10
var remainder2 = num2%10
var remainder3 = num3%10

if(remainder1 == remainder2 == remainder3){
    console.log(`${num1} , ${num2} and ${num3} has the same last digits`);
}else if(remainder1== remainder2){
    console.log(`${num1} and ${num2} has the same last digits`);
}else if(remainder2 == remainder3 ){
    console.log(`${num2}and ${num3} has the same last digits`);
}else{
    console.log(`${num1},${num2}and ${num3} dont has the same last digits`);


}