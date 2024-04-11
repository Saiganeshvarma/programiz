var myStr = "sai ganesh varma"
var newStr = myStr.split(' ')
for(var i = 0 ; i<newStr.length ; i++){
    newStr[i] = newStr[i].charAt(0).toUpperCase()+newStr[i].slice(1)
}
var Str =  newStr.join('')
console.log(Str);