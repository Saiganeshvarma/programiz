var myStr = "i like the red car in the red jarage"
var newStr = myStr.replace(/red/g , "green")
console.log(newStr);
// if any capital letters are found in the myStr we can use the i in the newStr to cahnge them
// for example if the red was in the Red the we can use /red/gi so the i that upper case words can 
// also be changed