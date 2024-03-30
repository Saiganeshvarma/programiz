var n = 800
for(var i = 1 ; i<=n ; i++){
    var temp = i
    var noOfDigits = i.toString().length
    var sum = 0
    while(temp != 0){
        var remainder = temp%10
        sum += Math.pow(remainder,noOfDigits)
        temp = Math.floor(temp/10)
    }
    if(i ==sum ){
        console.log(i);
    }
}