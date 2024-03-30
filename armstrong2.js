var num = 1634
var temp = num
var sum = 0
while(temp != 0){
    var remainder = temp%10
    sum += remainder*remainder*remainder*remainder
    temp = Math.floor(temp/10)
}
if(sum == num){
    console.log(`${num} is an armstrong number`);
}else{
    console.log(`${num} is not an armstrong number`);
}