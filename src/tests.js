function teste(calculado, esperado) {
    if (calculado === esperado) {
        console.log("Passou!");
        return true;
    } else {
        console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
        return false;
    }
}

teste(encode("Banana", 2), "Dcpcpc");
console.log(encode("Banana", 2));
teste(encode("Água", 4), "Ákye");
console.log(encode("Água", 4));
teste(encode("suco", 5), "xzht");
console.log(encode("suco", 5));
teste(decode("xzht", 5), "suco");
console.log(encode("xzht", 5));
teste(decode("Thyph", 7), "Maria");
console.log(encode("Thyph", 7));
teste(decode("Hqflforségld", 3), "Enciclopédia");
console.log(encode("Hqflforségld", 3));


