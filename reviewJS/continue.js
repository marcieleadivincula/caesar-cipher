var x = 1;
document.write("Entering the loop<br /> ");

while (x < 10) {
  x = x + 1;

  if (x == 5) {
    continue; // skip rest of the loop body
  }
  document.write(x + "<br />");
}
document.write("Exiting the loop!<br /> ");