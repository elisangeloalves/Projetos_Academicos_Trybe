    const clearButton = document.getElementById('clear-board');
    const selectedColor = document.querySelectorAll(".color");
    const cores = document.getElementById("color-palette");
    let pixelBoard = document.querySelector("#pixel-board");
    const pixel = document.getElementsByClassName("pixel");
    document.querySelector(".black").classList.add("selected");
    let boardSize = document.getElementById("board-size");
    const botaoGeraQuadro = document.getElementById("generate-board");

    let corEscolhida = 'black';
    let tamanhoDoBoard = 0;
    let tamanho= '';
    
    configuraBoard(5);
   function configuraBoard(a){
    let board ='', valor= '';
    if(a < 5){
        valor = 5;
    }
    else if(a > 50){
         valor = 50;
    }
    else {
         valor = a;
    } 
    pixelBoard.innerHTML = "";
        for(let c = 0; c < valor; c +=1){
            let linha = document.createElement("div");
            linha.className = "lines";
            for(let cont = 0; cont < valor; cont +=1){
                let pixelCell = document.createElement("div");
                pixelCell.className = "pixel borda";
                pixelCell.style.backgroundColor = "white";
               // console.log("pixel: ", pixelCell.innerText);
                linha.appendChild(pixelCell);
            }
             pixelBoard.appendChild(linha);
            
        }
      //  return board;
    }
botaoGeraQuadro.addEventListener('click', checaEntrada);
function checaEntrada(

){ 
    let valor = boardSize.value;
if (valor != ""){

   if(valor == 0){
  alert("Digite um valor diferente de 0!");
    boardSize.value = '';
    boardSize.focus();
  }
        
   else configuraBoard(valor);
}
    else { alert("Board inválido!")} 
    boardSize.value = '';
    boardSize.focus();

}   
clearButton.addEventListener('click', limpaPixel);
    function limpaPixel(){
        for(let item = 0; item < pixel.length; item++){
            pixel[item].style.backgroundColor = "white";
            }
   }
    function selecionaCor(e){
        corEscolhida = e.target;
        for(i = 0; i < selectedColor.length; i+=1){ 

            if(  selectedColor[i] == corEscolhida){
                corEscolhida.classList.add("selected");
                document.querySelector(".selecao").textContent = e.target.classList[0];
            }
            else {
                    selectedColor[i].classList.remove("selected");
         
        }
        }
         corEscolhida = getComputedStyle(corEscolhida, null).getPropertyValue('background-color');
    }
    function colorePixel(e){
        let pixelClicado = e.target;
        pixelClicado.style.backgroundColor = corEscolhida;
    }
    window.alert("Ola! para pintar o sete insira o tamanho do quadro");    

    cores.addEventListener('click', selecionaCor);
    pixelBoard.addEventListener('click', colorePixel);
    