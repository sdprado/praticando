const palavra = prompt("Informe uma plavra:");
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!");
} else {
  alert(
    palavra + "é um palíndromo! \n\n " + palavra + " !== " + palavraInvertida
  );
}
