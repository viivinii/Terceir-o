const botões = document.querySelectorAll(".botao");
const textos = document.querySelectorAll*(".aba-conteudo")

for(let i=0; i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classlist.remove("ativo")
            textos[j].classlist.remove("ativo")
        }

        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const empoObjetivo1 = new Date("2023-10-05T00:00:00");
const empoObjetivo2 = new Date("2023-12-05T00:00:00");
const empoObjetivo3 = new Date("2023-12-30T00:00:00");
const empoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4]


function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let TempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(TempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);
    
    segundos %=60;
    minutos %=60;
    horas %=24;
    if (TempoFinal >0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }

}

function atualizaCronometro(){
    for (i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();