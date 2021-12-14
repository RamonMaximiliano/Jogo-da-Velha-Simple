/* When opening page, selects a random player to start*/
let player = ''
let randomPlayer = Math.floor(Math.random() * 2) + 1;
if (randomPlayer == 1){
    player = 'X'
} else {
    player = 'O'
}
document.querySelector("p.turn").innerHTML = player
/* When opening page, selects a random player to start*/

/*Alterando o field "A vez é:", confome o que estava anteriormenter
ou seja, alternando os jogadores*/

//quando você seleciona queryselector all, o retorno é um array, e não é possivel fazer eventListener em arrays, por isso é necessário o loop abaixo, para fazer o eventlistener um por um. */ 
let squareArray = document.querySelectorAll(".square");
console.log(squareArray)

for (let block of squareArray){
    block.addEventListener('click', chosePlayer)
}

function chosePlayer(){
    let avez= document.querySelector("p.turn").innerHTML 
    if(avez === 'X'){
        document.querySelector("p.turn").innerHTML = 'O'
    } else {
        document.querySelector("p.turn").innerHTML = 'X'
    }
}
/*Alterando o field "A vez é:", confome o que estava anteriormenter
ou seja, alternando os jogadores*/



/*colocar o jogador no elemento clicado*/
let squareArray2 = document.querySelectorAll(".square");
for (item in squareArray2){
    let newItem = Number(item)+1
    document.getElementById("square" + newItem).addEventListener('click', setPlayer)
    function setPlayer(){
        document.getElementById("data" + newItem).innerHTML = document.querySelector("p.turn").innerHTML
    }
}
/*colocar o jogador no elemento clicado*/








// debugar porque ele ta trocando o jogador na hora que clica a primeira vez quando carrega a pagina 
//colocar o jogador no elemento clicado
//bloquear para que só consiga adicionar jogador em elentos vazios
//Até que trave tudo e sou obrigado a reiniciar


//validar vitoria
//colocar vencedor no campo vencedor



//reseta a tela, como se apertasse F5
function restart(){
    window.location.reload()
}

