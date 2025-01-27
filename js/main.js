document.querySelector("#blue").addEventListener("click", blue);
document.querySelector("#red").addEventListener("click", red);
document.querySelector("#green").addEventListener("click", green);

function blue() {
  return (
    (document.body.style.backgroundColor = "#2b12eb"),
    (document.body.style.color = "#fff")
  );
}

function red() {
  return (
    (document.body.style.backgroundColor = "#eb1212"),
    (document.body.style.color = "#fff")
  );
}

function green() {
  return (
    (document.body.style.backgroundColor = "#17d35f"),
    (document.body.style.color = "#fff")
  );
}

let count = 0;

document.querySelector("#plus-three").addEventListener("click", plusThree);
document.querySelector("#minus-five").addEventListener("click", minusFive);
document.querySelector("#plus-ten").addEventListener("click", plusTen);
document.querySelector("#zero").addEventListener("click", zero);
document.querySelector("#display-number").textContent = count;

function plusThree() {
  count += 3;
  return (document.querySelector("#display-number").textContent = count);
}

function minusFive() {
  count -= 5;
  return (document.querySelector("#display-number").textContent = count);
}

function plusTen() {
  count += 10;
  return (document.querySelector("#display-number").textContent = count);
}

function zero() {
  count = 0;
  return (document.querySelector("#display-number").textContent = count);
}

let temp = 0;
document.querySelector("#farenheit").textContent = temp;
document.querySelector("#enter").addEventListener("click", convert);

function convert() {
  let convert = document.querySelector("#converter").value;
  temp = (convert * 9) / 5 + 32;
  return (document.querySelector("#farenheit").textContent = temp);
}

function addTwoNums(num1, num2) {
  alert(num1 + num2);
}

function multiplyThreeNums(num1, num2, num3) {
  console.log(num1 * num2 * num3);
}

function divideTwoNums(num1, num2) {
  console.log(num1 / num2);
}

addTwoNums(1, 2);
multiplyThreeNums(2, 3, 4);
divideTwoNums(10, 3);
