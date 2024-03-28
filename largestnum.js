var a = 10
var b = 15
var  c = 10
if(a >b && a > c){
    console.log(`${a} is the big number`);
}else if(b > a && b > c){
    console.log(`${b} is the big number`);
}else if (a == b && b == c){
    console.log(`${a} ${b} ${c} are same numbers`);
}else {
    console.log(`${c} is the big number`);
}