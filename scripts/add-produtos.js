"use strict"
const botao = document.getElementById("Incluir");
const textarea = document.getElementById("quadro-branco");
const TextPreco = document.getElementById("segundo-quadro");
const opc1 = document.getElementById("op1");
let select = document.getElementById("Produtos");
let Salvar = [];
let soma = 0;


botao.addEventListener('click',()=>{
        let opcaoTexto = select.options[select.selectedIndex].text;
        if(opcaoTexto == "---"){
            alert("Nenhum Produto selecionado!");
        }
        
        else{
            textarea.innerHTML+= (opcaoTexto + "\n");
            Salvar.push(parseInt(select.value));
            soma += Salvar[Salvar.length-1];
            TextPreco.value = soma;
            console.log(soma);

        };
    })
function Limpar(){
    textarea.innerHTML="";
    TextPreco.value="";
    soma = 0;
    
    alert("Limpando")

}
function Confimar(){
    if(soma != 0){
        textarea.innerHTML="";
        TextPreco.value="";
        alert("Obrigado por Comprar!!!")

    }
    else 
        alert("Nenhum Produto selecionado")
    soma = 0;
}