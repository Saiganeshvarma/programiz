var myArray1 = [1,2,3,4,5]
var myArary2 = [4,5,6,7,8,9]
var unionArray = []
for(var i = 0 ; i<myArray1.length ; i++){
    if(!unionArray.includes(myArray1[i])){
        unionArray.push(myArray1[i])
    }
}
for(var j = 0 ; j<myArary2.length ; j++){
    if(!unionArray.includes(myArary2[j])){
        unionArray.push(myArary2[j])
    }
}
console.log(unionArray);