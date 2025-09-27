const visor_div = document.getElementById("visor"); //Pegar o visor
const botaoNum = document.querySelectorAll(".numero"); // Pegar todos os botões de numeros
const botaoOpe = document.querySelectorAll(".operacao"); // Pegar todos os botões de operações

let numAtual = ""; // Vai armazenar o número digitado;
let numAnterior = ""; // Vai armazernar o penúltimo número digitado;
let operacao = ""; // armazena a operação


//-----Numeros-------- 

botaoNum.forEach(Botao =>{     //Para cada botão de número apertado ...
    Botao.addEventListener("click", () => {    // Quando clicar ...
        const valor = Botao.innerText;    //"valor" vai armazenar o texto do botao apertado
        if(visor_div.innerText === "0"){   // Se o valor inicial for 0, ...
            visor_div.innerText = valor; // o texto do visor vai mudar de 0 para o valor que estiver na variável "valor"
            numAtual = valor; //numAtual armazena o valor digitado
        } else { // Se o visor não estiver com o valor inicial de 0 ...
            visor_div.innerText += valor; // o texto do visor vai concatenar como o valor que estiver na variável "valor"
            numAtual += valor; //numAtual armazena o valor digitado
        }
    });
});


//--------Operações-------

botaoOpe.forEach(Botao => {
    Botao.addEventListener("click", () => {
        const valor = Botao.innerText;

        if(valor === "="){
            calcular();
        } else {
            if(valor === ""){
                return;
            }
            if(valor !== ""){
                calcular();
            }
            numAnterior = numAtual;
            numAtual = "";
            operacao = valor;
            visor_div.innerText = "0";
        }
    })
})

//---------Função Calcular---------

function calcular(){
    const anterior = parseFloat(numAnterior);
    const atual = parseFloat(numAtual);
    let resultado;

    if (isNaN(anterior) || isNaN(atual)) return;

    switch (operacao){
        case "+" : resultado = anterior + atual; break;
        case "-" : resultado = anterior - atual; break;
        case "X" : resultado = anterior * atual; break;
        case "/" : resultado = anterior / atual; break;
        default: return;
    }

    visor_div.innerText = resultado;
    numAtual = resultado.toString();
    numAnterior = "";
    operacao = "";
}