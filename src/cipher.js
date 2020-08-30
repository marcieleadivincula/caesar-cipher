function encode(texto, chave) {
  let textToCode = document.getElementById("texto").value;
  let offset = document.getElementById("deslocamento").value;
  let desloc = parseInt(offset);
  let textArray = [];
  let arrayAsc = [];
  let textoCodificado = "";

  for (let i = 0; i < textToCode.length; i++) {
    textArray.push(textToCode.charCodeAt(i));
  }

  for (let j = 0; j < textArray.length; j++) {
    if (textArray[j] >= 65 && textArray[j] <= 90) {
      arrayAsc.push((((textArray[j] - 65 + desloc) % 26) + 65));
    } else if (textArray[j] >= 97 && textArray[j] <= 122) {
      arrayAsc.push((((textArray[j] - 97 + desloc) % 26) + 97));
    } else {
      arrayAsc.push(textArray[j]);
    }
  }

  for (let g = 0; g < arrayAsc.length; g++) {
    textoCodificado += String.fromCharCode(arrayAsc[g]);
  }

  document.getElementById("textocifrado").innerHTML = textoCodificado;
  return textoCodificado;
}

function decode(texto, chave) {
  let textToCode = document.getElementById("texto").value;
  let offset = document.getElementById("deslocamento").value;
  let desloc = parseInt(offset);
  let textArray = [];
  let arrayAsc = [];
  let textoCodificado = "";

  for (let i = 0; i < textToCode.length; i++) {
    textArray.push(textToCode.charCodeAt(i));
  }

  for (j = 0; j < textArray.length; j++) {
    if (textArray[j] >= 65 && textArray[j] <= 90) {
      arrayAsc.push((((textArray[j] - 90 - desloc) % 26) + 90));
    } else if (textArray[j] >= 97 && textArray[j] <= 122) {
      arrayAsc.push((((textArray[j] - 122 - desloc) % 26) + 122));
    } else {
      arrayAsc.push(textArray[j]);
    }
  }

  for (g = 0; g < arrayAsc.length; g++) {
    textoCodificado += String.fromCharCode(arrayAsc[g]);
  }

  document.getElementById("textocifrado").innerHTML = textoCodificado;
  return textoCodificado;
}