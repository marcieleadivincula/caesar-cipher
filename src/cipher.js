/*window.cipher = {
  // ...
};*/
//const text = document.getElementById('texto1').value;
//const key = document.getElementById('texto2').value;

function encode() {
  const text = document.getElementById('texto1').value;
  const key = document.getElementById('number1').value;
  let codmai = "A";
  let codmin = "a";
  let codAposition = codmai.charCodeAt(0);
  let codaposition = codmin.charCodeAt(0);
  let fullPosition = (codAposition + codaposition);
  let codASC;

  for (let i = 0; i < text.length; i++) {
    codASC = text.charCodeAt(i);
    if (codASC >= 65 && codASC <= 90) {
      fullPosition =((codASC - codAposition + key) % 26) + codAposition;
    } else if (codASC >= 97 && codASC <= 122) {
      fullPosition =((codASC - codaposition + key) % 26) + codaposition;
      console.log(encode);
    } if (codASC);
  }

  //text.innerHTML = String.fromCharCode(fullPosition)
  console.log(String.fromCharCode(fullPosition))
  document.write(String.fromCharCode(fullPosition))

  console.log("Resultado");

  encode('Manga', 1)
  document.write(" <br> ")
  encode('Jaca', 2)
  document.write(" <br> ")

function decode(){
let codmai = "A";
let codmin = "a";
let codAposition= codmai.charCodeAt(0);
let codaposition = codmin.charCodeAt(0);
let fullPosition = (codAposition + codaposition);
let codASC;

for (let j = 0; j < text.length; j++) {
codASC  = text.charCodeAt(j);
if(codASC >=65 && codASC  <= 90){
fullPosition = ((codASC  - codAposition + key)%26)+ codAposition;
}else if(codASC  >=97 && codASC  <= 122){
fullPosition = ((codASC  - codaposition + key)%26)+ codaposition;
console.log(encode);
}if(codASC);
}

//text.innerHTML = String.fromCharCode(fullPosition)
console.log(String.fromCharCode(fullPosition))
document.write(String.fromCharCode(fullPosition))

console.log("Resultado")

decode ('Manga',1 )
document.write(" <br> ")
decode('Jaca', 2)
document.write(" <br> ")
