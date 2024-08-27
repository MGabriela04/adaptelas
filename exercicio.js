
function dirigirhabi(idade, habilitada) {
  if (idade >= 18 && habilitada) {
    return "Você está apto(a) a dirigir.";
  } else if (idade >= 18 && !habilitada) {
    return "Você não está apto(a) a dirigir.";
  } else {
    return "Você não tem idade suficiente para dirigir.";
  }
}