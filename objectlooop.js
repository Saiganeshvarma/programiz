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
for(var key in myObj){
    var value ;
    value = myObj[key]
    console.log(key + " - " + value);
}