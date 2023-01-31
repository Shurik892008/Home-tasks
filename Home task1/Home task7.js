document.getElementById("inputMeters").addEventListener("input", (e) => {
  LengthConverter(Number(e.target.value))
  LengthConverter1(Number(e.target.value))
  LengthConverter2(Number(e.target.value))
  LengthConverter3(Number(e.target.value))
})

function LengthConverter(valNum) {
  document.getElementById("outputkm").innerHTML = valNum / 1000;
}

function LengthConverter1(valNum) {
  document.getElementById("outputfut").innerHTML = valNum * 3.28;
}

function LengthConverter2(valNum) {
  document.getElementById("outputmil").innerHTML = valNum * 3.24;
}

function LengthConverter3(valNum) {
  document.getElementById("outputper").innerHTML = valNum * 0.0006;

}

