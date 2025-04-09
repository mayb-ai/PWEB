let idade = 0;
let sexo = 0;
let opiniao = 0;
let mVelha = 0;
let mNova = Infinity;
let qtdePessimo = 0;
let mediaIdade = 0;
let totalIdade = 0;
let pOtimo = 0;
let pBom = 0;
let mulher = 0, homem = 0, outros = 0;
let total = 3;
 
for(let i=1; i < total;i++){
 
   
    //Idade mais velho e mais novo
    idade = parseInt(prompt("Digite a idade: "));
    totalIdade+=idade;
    mVelha = Math.max(mVelha, idade);
    mNova = Math.min(mNova, idade);
 
    //numero mulheres, homens e outros
    sexo = prompt("Digite o sexo: ");
    if(sexo == 'F')
        mulher++;
    else if(sexo == 'M')
        homem++;
    else
        outros++;
 
    //Quantidade de péssimos
    opiniao = parseInt(prompt("Digite sua opinião: "));
    if(opiniao == 1){
        qtdePessimo++;
    }
 
    //Para porcentagem de ótimo e bom
    if(opiniao == 4)
        pOtimo++;
    if(opiniao == 3)
        pBom++;
}
mediaIdade = totalIdade/total;
 
pOtimo = (pOtimo/total)*100;
pBom = (pBom/total)*100;
 
document.getElementById("media").innerText = `Média de idade: ${mediaIdade}\nIdade pessoa mais velha: ${mVelha}\nIdade pessoa mais nova: ${mNova}\nQuantidade de pessoas que responderam péssimo: ${qtdePessimo}\nPorcentagem de respostas para "ótimo": ${pOtimo}\nPorcentagem de respostas para "bom": ${pBom}\nNúmero de mulheres: ${mulher}\nNúmero de homens: ${homem}\nNúmero de outros: ${outros}`;
