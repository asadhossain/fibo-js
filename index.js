

var a = 0, b = 1;

for(var i=0; i<=10; i++ ){
    var temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
document.write(temp + "<br>");
}
