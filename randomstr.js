var myStr = "abcdefghij"
var newStr = " "
for(var i = 0 ; i<myStr.length ; i++){
    newStr += myStr.charAt(Math.floor(Math.random()*myStr.length))

}
console.log(newStr);