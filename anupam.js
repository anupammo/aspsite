//function typeWriter() {}
var i = 0;
var txt = 'QUICK BRAIN - SERVICES WE PROVIDE';
var txt1 = 'QUICK BRAIN - ONGOING EXECUTION';
var txt2 = 'QUICK BRAIN - OUR CLIENTS';
var txt3 = 'QUICK BRAIN CONSULTANCY - CONTACT US';
var speed = 50;
function typeWriter1() {
  if (i < txt.length) {
    document.getElementById("typetext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}
function typeWriter2() {
  if (i < txt1.length) {
    document.getElementById("typetext").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  }
}
function typeWriter3() {
  if (i < txt2.length) {
    document.getElementById("typetext").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter3, speed);
  }
}
function typeWriter4() {
  if (i < txt3.length) {
    document.getElementById("typetext").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter4, speed);
  }
}
