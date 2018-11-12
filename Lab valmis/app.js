var x = document.getElementById('berry');
x.style.backgroundColor = 'red';

//document.querySelector('#data-foodtype').style.backgroundColor = 'orange';
//
var x = document.getElementsByTagName('li');
var i;
for (i=0; i < x.length; i++) {
    x[3].style.backgroundColor = "green";
    x[2].style.backgroundColor = "orange";
    x[i].style.width = "100px";
    x[i].style.listStyle = "none";
    x[i].style.border = "solid black 1px";
}
console.log(x);


var myNodeList = document.querySelectorAll("li");
document.getElementsByClassName("fruits").innerHTML =
    myNodeList.length;

console.log(myNodeList)

//myNodeList.forEach()
//