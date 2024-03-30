var a = 1
var b = 3
var c = 2
var  d = b*b - 4*a*c
var root1;
var root2;

if(d > 0){
    root1 = -b+(d)/2*a
    root2 = -b-(d)/2*a
    console.log(` The roots are ${root1}, ${root2}`);
}else if(d==0){
    root1 = root2 = -b/2*a
    console.log(`The roots are ${root1} ,${root2}`);
}
else{
    var realPart = (-b/2*a).toFixed(2)
    var imaginaryPart =(( Math.sqrt(-d)/2*a)).toFixed(2)
    root1 = realPart+imaginaryPart
    root2 = realPart-imaginaryPart
    console.log(` The roots are ${root1} ,${root2}`);
}