var myArray = [1,2,3,4,5,6]
var element = 4
var newArray = []
for(var i = 0 ; i<myArray.length ; i++){
    if(myArray[i] != element){
        newArray.push(myArray[i])
    }
}
console.log(newArray);