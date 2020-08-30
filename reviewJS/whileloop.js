var count = 0;
document.write("Starting Loop ");

while (count < 10) {
  document.write("Current Count : " + count + "<br />");
  count++;
}

document.write("Loop stopped!");

//DO-WHILE
var count = 0;

document.write("Starting Loop" + "<br />");
do {
  document.write("Current Count : " + count + "<br />");
  count++;
}

while (count < 5);
document.write("Loop stopped!");