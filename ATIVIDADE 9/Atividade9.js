
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
  }

  function ordenarNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
  }
  

  function verifPalindromo(str) {
    const texto = str.toUpperCase();
    const invertido = texto.split('').reverse().join('');
    return texto === invertido;
  }
  
  function tipoTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
      if (a === b && b === c) {
        return "Triângulo Equilátero";
      } else if (a === b || b === c || a === c) {
        return "Triângulo Isósceles";
      } else {
        return "Triângulo Escaleno";
      }
    } else {
      return "Não forma um triângulo";
    }
  }
  
