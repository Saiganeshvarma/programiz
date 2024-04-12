var year = 2001
if(0 == year%4 && 0!=year%4 || 0==year%400){
    console.log("its a leap year");
}else{
    console.log("its not a leap year");
}