var mystr = "racecar"
for(var i = 1 ;i<=mystr.length ; i++){
    if(mystr[i] != mystr[mystr.length-i-1]){
        console.log("its not a plaindrome");
        break;
    }else{
        console.log("its a palindrome");
        break;
    }
}