var aProperty;
document.write("Navigator Object Properties<br /> ");
for (aProperty in navigator) {
  document.write(aProperty);
  document.write("<br />");
}
document.write("Exiting from the loop!");