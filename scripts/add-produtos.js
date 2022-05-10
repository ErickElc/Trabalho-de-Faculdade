"use strict"
const botao = document.getElementById("Incluir");
const textarea = document.getElementById("quadro-branco");
const TextPreco = document.getElementById("segundo-quadro");
let select = document.getElementById("Produtos");

let Salvar = [];
let soma = 0;


botao.addEventListener('click',()=>{
    //TEXTO

        let opcaoTexto = select.options[select.selectedIndex].text;
        if(opcaoTexto == "---"){
            alert("Nenhum Produto selecionado!");
        }
        // 
        else{
            textarea.innerHTML+= (opcaoTexto + "\n");
            Salvar.push(parseInt(select.value));
            soma += Salvar[Salvar.length-1];
            TextPreco.value = soma;
            console.log(soma);

        };

    ////SOMA



    })

    