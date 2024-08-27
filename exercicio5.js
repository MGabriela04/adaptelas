function verifica(str) {
    let tamanho = str.length;
    if (tamanho > 20) {
      console.log("O limite de caracteres foi excedido.");
    } else if (tamanho === 20) {
      console.log("Você atingiu o limite de caracteres");
    } else {
      console.log("O limite de caracteres ainda não foi excedido...");
    }
  }
  verifica("uma string curta"); 
  verifica("uma string com 20 caracteres exatamente");
  verifica("uma string muito muito muito longa"); 