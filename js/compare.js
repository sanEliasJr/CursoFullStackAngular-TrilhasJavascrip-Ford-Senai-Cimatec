
//car
let carArr = [];
let checkBoxChekado = 0;

class Car {
   
    nome;
    preco;
    alturaCacamba;
    alturaVeiculo;
    alturaSolo;
    capacidadeCarga;
    motor;
    potencia;
    volumeCacamba;
    roda;
    image;

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){    

        if(el.checked){

            carArr.push(new Car(carClass.nome, carClass.preco, carClass.alturaCacamba, carClass.alturaVeiculo, carClass.alturaSolo, carClass.capacidadeCarga, carClass.motor, carClass.potencia, carClass.volumeCacamba, carClass.roda, carClass.image))
            checkBoxChekado+=1;

            if(checkBoxChekado>= 2){
                //mapear todos os checkbox e setar o que não estiver chekado para desable)
                let dado = document.querySelectorAll("input");
                dado.forEach(index =>{
                    if(index.checked == false){
                        index.setAttribute("disabled", "disable");
                     }
                })
            }

        } else {

            carArr.splice(GetCarArrPosition(carArr, carClass),1) 
            checkBoxChekado -= 1; 
                //mapear todos os checkbox e setar o que não estiver chekado para desable)
                let dado = document.querySelectorAll("input");
                dado.forEach(index =>{
                    if(index.checked == false){
                        index.removeAttribute("disabled");
                     }
                })
        } 

    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    for(let i = 0; i < carArr.length; i++){
        document.getElementById(`compare_image_${[i]}`).innerHTML = `<img src = "${carArr[i].image}" width = 200px>`;
        document.getElementById(`compare_modelo_${[i]}`).innerHTML = carArr[i].nome;
        document.getElementById(`compare_alturacacamba_${[i]}`).innerHTML = carArr[i].alturaCacamba; 
        document.getElementById(`compare_alturaveiculo_${[i]}`).innerHTML = carArr[i].alturaVeiculo;
        document.getElementById(`compare_alturasolo_${[i]}`).innerHTML = carArr[i].alturaSolo;
        document.getElementById(`compare_capacidadecarga_${[i]}`).innerHTML = carArr[i].capacidadeCarga;
        document.getElementById(`compare_motor_${[i]}`).innerHTML = carArr[i].motor;
        document.getElementById(`compare_potencia_${[i]}`).innerHTML = carArr[i].potencia;
        document.getElementById(`compare_volumecacamba_${[i]}`).innerHTML = carArr[i].volumeCacamba;
        document.getElementById(`compare_roda_${[i]}`).innerHTML = carArr[i].roda;
        document.getElementById(`compare_preco_${[i]}`).innerHTML = carArr[i].preco;
    }
}





/* 
IDEIA***

PEGAR TODOS O INPUTS E VERIFICAR SE ELE FOI CHECKADO, O QUE NÃO FOR CHECKADO BOLQUEIA

*/