var myObj1 = {
    myName : "sai ganesh",
    age : 23,
    village : "Thirumalagiri",
    dist : "Suryapet",
}

var myObj2 = {
    pincode : 508213,
    school : "Sls scholars heigh school",
    intermidiate : "Srinidhi junior collage",
    engineering : "sriindhu engineering collage"

}

var newObj = Object.assign(myObj1,myObj2)
console.log(newObj);