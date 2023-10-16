



function calcularConta() {
    const choppsAntes = parseInt(document.getElementById('choppsAntes').value);
    const choppsDepois = parseInt(document.getElementById('choppsDepois').value);

    // Preço de um chopp sem desconto
    const precoChopp = 10;
    // Total antes das 19h
    const totalAntes = choppsAntes * precoChopp;

    // Total depois das 19h
    const totalDepois = choppsDepois * precoChopp * 1.10; // 10% de acréscimo

    // Total geral
    const totalGeral = totalAntes + totalDepois;


    const relatorioHTML = `
  
    <p>Total antes das 19h: R$ ${totalAntes.toFixed(2)}</p>
    <p>Total depois das 19h (com 10% de acréscimo): R$ ${totalDepois.toFixed(2)}</p>
    <p>Total geral a ser pago: R$ ${totalGeral.toFixed(2)}</p>
    

    <img class="imaa1" src="img/chopp2.gif" alt="">
`;

    document.getElementById('relatorio').innerHTML = relatorioHTML;
}
