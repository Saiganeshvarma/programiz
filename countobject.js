var myObj = {
    myName : "sai ganesh",
    age : 23,
    village : "Thirumalagiri",
    dist : "Suryapet",
    pincode : 508213,
    school : "Sls scholars heigh school",
    intermidiate : "Srinidhi junior collage",
    engineering : "sriindhu engineering collage"

}
var count = 0
for(var key in myObj){
    count++
}
console.log(count);