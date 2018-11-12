var x = document.getElementsByTagName('li');
var i;
for (i=0; i < x.length; i++) {
    x[3].style.backgroundColor = "green";
    x[i].style.width = "100px";
    x[i].style.listStyle = "none";
}
console.log(x);