var num = 3
var isPrime = true
for(var i = 2 ; i<num ; i++){
    if(num % i == 0){
        isPrime = false
        break;
    }else{
        isPrime = true


    }
}
console.log(isPrime);