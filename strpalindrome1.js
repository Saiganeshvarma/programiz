var myStr = "racecar"
var newStr = myStr.split('').reverse().join('')

if(myStr == newStr){
    console.log('its a palindrome');
}else{
    console.log("its not a plaindrome");
}