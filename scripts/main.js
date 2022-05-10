// const botao = document.getElementById("Incluir");
// const textarea = document.getElementById("quadro-branco");

function SalvarValorProduto(){
    Salvar.push(Number(produtos.value)); 
    console.log(Salvar)
    if(Salvar == 1){
        textarea.innerHTML+="Kingston 4Gb\n";
        valor += 110;

    }
    else if(Salvar == 2){
        textarea.innerHTML+=`Samsung 8Gb\n`;
        valor += 220;
    }
    else if(Salvar == 3){
        textarea.innerHTML+=`Kingston fury 8Gb\n`;
        valor += 330;

    }
    else if(Salvar == 4){
        textarea.innerHTML+=`Cosair Vengeance 8Gb\n`;
        valor += 300;
    }
    else if(Salvar == 5){
        textarea.innerHTML+=`Western Digital 500 Gb\n`;
        valor += 220;
    }

    else if(Salvar == 6){
        textarea.innerHTML+=`Seagate 1 TB\n`;
        valor += 300;

    }
    else if(Salvar == 7){
        textarea.innerHTML+=`Samdisk 480 Gb\n`;
        valor += 250;
    }
    else if(Salvar == 8){
        textarea.innerHTML+=`Kingston 960 TB\n`;
        valor += 500;
    }
    else if(Salvar == 9){
        textarea.innerHTML+=`Kingston 500Gb\n`;
        valor += 223
    }
    else if(Salvar == 10){
        textarea.innerHTML+=`Western Digital 240TB\n`;
        valor += 150;
    }
    TextPreco.value = valor
    Salvar = [];
}




