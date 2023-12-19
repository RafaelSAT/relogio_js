let relDigital = document.querySelector('.digital');
let sElemento = document.querySelector('.p_s');
let mElemento = document.querySelector('.p_m');
let hElemento = document.querySelector('.p_h');

function atualizarRelogio(){
    let horario = new Date();
    let hora = horario.getHours();
    let minuto = horario.getMinutes();
    let segundo = horario.getSeconds();

    relDigital.innerHTML = `${addZero(hora)}:${addZero(minuto)}:${addZero(segundo)}`;

    let sDeg = ((360 / 60) * segundo) - 90;
    let mDeg = ((360 / 60) * minuto) - 90;
    let hDeg = ((360 / 60) * hora) - 90;

    sElemento.style.transform = `rotate(${sDeg}deg)`;
    mElemento.style.transform = `rotate(${mDeg}deg)`;
    hElemento.style.transform = `rotate(${hDeg}deg)`;


}

function addZero(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();