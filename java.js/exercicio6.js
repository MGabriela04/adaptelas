function calcular() {
    let valorTotal = parseFloat(prompt("Digite o valor total das compras: "));

    if (valorTotal > 200) {
      let desconto = valorTotal * 0.10;
      let valorTotalComDesconto = valorTotal - desconto;
      console.log(`O valor total do pedido com desconto é de R$ ${valorTotalComDesconto.toFixed(2)}`);
      console.log(`O desconto aplicado foi de R$ ${desconto.toFixed(2)}`);
    } else {
      console.log(`O valor total do pedido é de R$ ${valorTotal.toFixed(2)}`);
    }
  }
  
  calcular();