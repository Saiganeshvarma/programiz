var n = 10
for(var i = 2; i<=n ; i++){
    var isPrime = true
    for(var j = 2 ; j<i ; j++){
        if(i % j == 0){
            isPrime = false
        }
    }
    if(isPrime){
        console.log(i);
    }
}