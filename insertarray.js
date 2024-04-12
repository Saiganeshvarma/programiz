var myArray = [1,3,4,5,6]
var element = 2
var index = 1
var newArray = []
for(var i = 0 ; i<myArray.length ; i++){
    if(i == index){
        newArray.push(element)
    }else{
        newArray.push(myArray[i])
    }
}
if(index >= myArray.length){
    newArray.push(element)
}
console.log(newArray);
