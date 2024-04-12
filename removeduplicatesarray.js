var myArray = [1,1,2,2,3,3,4,4,5,5]
var newArray = []
for(var i = 0 ; i<myArray.length ; i++){
    if(!newArray.includes(myArray[i])){
        newArray.push(myArray[i])
    }
}
console.log(newArray);
