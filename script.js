const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnCry")
const btnReset = document.querySelector("#btnReset")
let numRandom = Math.round(Math.random() * 10)
let attempts = 1;

btnTry.addEventListener("click", tryClick)
btnReset.addEventListener("click", resetClick)
document.addEventListener("keypress", enterClick)


// verifica se o numero do input é igual o numero aleatorio
function tryClick(event){
  event.preventDefault(); //não tenha o comportamento padrão da propriedade

  const result = document.querySelector("#inputValue")

  if(Number(result.value) == numRandom){
    clickToggle()
    
    if(attempts > 1){
      document
      .querySelector("#textScreen2")
      .innerHTML = `Acertou em ${attempts} tentativas`    }
    else{
      document
      .querySelector("#textScreen2")
      .innerHTML = `Acertou em ${attempts} tentativa`  
    }
  
  }

  result.value = ""
  attempts++
}

//funcionalidade da tecla enter, apenas na segunda tela
function enterClick(event){
  if((event.key === "Enter") && (screen1.classList.contains("hide"))){ //O .contains retorna verdadeiro se a lista contiver uma determinada classe
    resetClick()

  }
}

//chama a função clickToggle e volta pra tela inicial;
//chama a função randomNumber que gera numero aleatórios
function resetClick(){
    clickToggle()  
    randomNumber()

    attempts = 1  //reseta o numero o tentativas
}

//alterna enter as telas usando a propriedade toggle,
//que add se não tiver a class e remove se tiver a classe
function clickToggle(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

//gera um numero alatorio
function randomNumber(){
  numRandom = Math.round(Math.random() * 10)
  return numRandom
}
  