const form = document.querySelector("#form");
const button = document.querySelector("#enviar");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");

function enviar(event) {
  event.preventDefault();
  let peso = Number(inputPeso.value);
  let altura = Number(inputAltura.value);
  let imc = peso / (altura * altura);
  let resultadoImc = document.querySelector("#resultadoImc");
  imc = imc.toFixed(1);

  if (imc <= 18.5) {
    resultadoImc.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso)</p>`;
    document.querySelector("#resultado-abaixo").style.backgroundColor = "#ffc107";
  } else if (imc <= 24.9) {
    resultadoImc.innerHTML = `<p>Seu IMC é ${imc} (Peso normal)</p>`;
    document.querySelector("#resultado-normal").style.backgroundColor = "#28a745";
  } else if (imc <= 29.9) {
    resultadoImc.innerHTML = `<p>Seu IMC é ${imc} (Sobrepeso)</p>`;
    document.querySelector("#resultado-sobrepeso").style.backgroundColor = "#ffc107";
  } else if (imc <= 34.9) {
    resultadoImc.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`;
    document.querySelector("#resultado-grau1").style.backgroundColor = "#dc3545";
  } else if (imc <= 39.9) {
    resultadoImc.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`;
    document.querySelector("#resultado-grau2").style.backgroundColor = "#dc3545";
  } else if (imc > 40) {
    resultadoImc.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3)</p>`;
    document.querySelector("#resultado-grau3").style.backgroundColor = "#dc3545";
  } else if (isNaN(altura) ) {
    resultadoImc.innerHTML = `<p>Altura Invalida</p>`;
    resultadoImc.style.backgroundColor = "black";
    resultadoImc.style.color = "white";
    resultadoImc.style.textAlign = "center";
  }
  else if ( isNaN(peso)) {
    resultadoImc.innerHTML = `<p>Peso Invalida</p>`;
    resultadoImc.style.backgroundColor = "black";
    resultadoImc.style.color = "white";
    resultadoImc.style.textAlign = "center";

  }
}
addEventListener("submit", enviar)