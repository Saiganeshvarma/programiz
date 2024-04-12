var myStr = " learning the java script programs"
var space = " "
var newStr = ""
for(var i = 0 ; i<myStr.length ; i++){
    if(myStr[i] == space){
        newStr += "<br>"
    }else{
        newStr += myStr[i]
    }
}
console.log(newStr);