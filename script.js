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


/*Validation winner*/
let validationArray = document.querySelectorAll("div.square")
console.log(validationArray)

for (blockItem of validationArray) {
    blockItem.addEventListener('click', validateVictory)
}

let validFields = [['data1','data2','data3'],
                   ['data4','data5','data6'],
                   ['data7','data8','data9'],
                   ['data1','data4','data7'],
                   ['data2','data5','data8'],
                   ['data3','data6','data9'],
                   ['data1','data5','data9'],
                   ['data3','data5','data7']];

function validateVictory(){
    for (x=0; x <= validationArray.length;x++){
        let circle = x+1
        let firstValue = document.getElementById("data" + circle).innerHTML
        console.log(firstValue)
            if
            (
            firstValue != ''
            &&
            firstValue === document.getElementById("data1").innerHTML 
            &&
            firstValue === document.getElementById("data2").innerHTML 
            &&
            firstValue === document.getElementById("data3").innerHTML)
            {console.log(`O ganhador é ${firstValue}`); 
            document.getElementById("result").innerHTML = firstValue }
            else if 
            (firstValue != ''
            &&
            firstValue == document.getElementById("data4").innerHTML 
            &&
            firstValue == document.getElementById("data5").innerHTML 
            &&
            firstValue == document.getElementById("data6").innerHTML)
            {console.log(`O ganhador é ${firstValue}`);
            document.getElementById("result").innerHTML = firstValue }
            else if 
            (firstValue != ''
            &&
            firstValue == document.getElementById("data7").innerHTML 
            &&
            firstValue == document.getElementById("data8").innerHTML 
            &&
            firstValue == document.getElementById("data9").innerHTML)
            {console.log(`O ganhador é ${firstValue}`);
            document.getElementById("result").innerHTML = firstValue }
            else if
            (firstValue != ''
            &&
            firstValue == document.getElementById("data1").innerHTML 
            &&
            firstValue == document.getElementById("data4").innerHTML 
            &&
            firstValue == document.getElementById("data7").innerHTML)
            {console.log(`O ganhador é ${firstValue}`);
            document.getElementById("result").innerHTML = firstValue }
            else if 
            (firstValue != ''
            &&
            firstValue == document.getElementById("data2").innerHTML 
            &&
            firstValue == document.getElementById("data5").innerHTML 
            &&
            firstValue == document.getElementById("data8").innerHTML)
            {console.log(`O ganhador é ${firstValue}`);
            document.getElementById("result").innerHTML = firstValue }
            else if 
            (firstValue != ''
            &&
            firstValue == document.getElementById("data3").innerHTML 
            &&
            firstValue == document.getElementById("data6").innerHTML 
            &&
            firstValue == document.getElementById("data9").innerHTML)
            {console.log(`O ganhador é ${firstValue}`);
            document.getElementById("result").innerHTML = firstValue }
            else if 
            (firstValue != ''
            &&
            firstValue == document.getElementById("data1").innerHTML 
            &&
            firstValue == document.getElementById("data5").innerHTML 
            &&
            firstValue == document.getElementById("data9").innerHTML)
            {console.log(`O ganhador é ${firstValue}`);
            document.getElementById("result").innerHTML = firstValue }
            else if 
            (firstValue != ''
            &&
            firstValue == document.getElementById("data3").innerHTML 
            &&
            firstValue == document.getElementById("data5").innerHTML 
            &&
            firstValue == document.getElementById("data7").innerHTML)
            {console.log(`O ganhador é ${firstValue}`);
            document.getElementById("result").innerHTML = firstValue }
    } 
}
/*Validation winner*/


/*colocar o jogador no elemento clicado*/
let squareArray2 = document.querySelectorAll(".square");
for (item in squareArray2){
    let newItem = Number(item)+1
    document.getElementById("square" + newItem).addEventListener('click', setPlayer)
    function setPlayer(){
        let currentState = document.querySelector("p.turn").innerHTML
        if (currentState == 'X'){
            document.getElementById("data" + newItem).innerHTML = 'O'
        } else {
            document.getElementById("data" + newItem).innerHTML = 'X'
        }
    }
}
/*colocar o jogador no elemento clicado*/

/*reseta a tela, como se apertasse F5. restart game*/
function restart(){
    window.location.reload()
}
/*reseta a tela, como se apertasse F5. restart game*/


//bloquear para que só consiga adicionar jogador em elentos vazios
//Até que trave tudo e sou obrigado a reiniciar

//validar vitoria







