var myStr = "sai ganesh varma"
var vowels = ["a","e","i","o","u"]
var count = 0
for(var i = 0 ; i<myStr.length ; i++){
    for(var j = 0 ; j<vowels.length ; j++){
        if(myStr[i] == vowels[j]){
            count ++

        }
    }
}
console.log(count);