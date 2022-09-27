const form = document.getElementById('form-atividade');
const atividades= [];
const notas = [];
let linhas = "";

const notaMinima = parseFloat(prompt("Digite a Nota Mínima: "));


// Emojis links
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />'


//Span + CSS Aprovado / Reprovado
const spanAprovado = '<span class="resultado aprovado">Aprovado </span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado </span>';

form.addEventListener('submit', function (e){
    e.preventDefault();
    adicionaLinha();
    atualizarTabela();
    atualizarMediaFinal();
})


function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    


    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        let linha = "<tr>";
        linha += `<td> ${inputNomeAtividade.value} </td>`;
        linha += `<td> ${inputNotaAtividade.value} </td>`;
        linha += `<td> ${inputNotaAtividade.value >=notaMinima ? imgAprovado : imgReprovado} </td>`;
        linha += "</tr>";
        
        linhas += linha;    
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atualizarMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado; 

}

function calculaMediaFinal(){
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }
    return somaNotas / notas.length;
}