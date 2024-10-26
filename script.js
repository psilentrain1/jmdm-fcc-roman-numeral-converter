const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let roman = "";

const decimalToRoman = (number) => {
  if (number <= 0) {
    return;
  } else {
    if (number >= 1000) {
      roman += "M";
      number -= 1000;
      decimalToRoman(number);
    } else if (number >= 900) {
      roman += "CM";
      number -= 900;
      decimalToRoman(number);
    } else if (number >= 500) {
      roman += "D";
      number -= 500;
      decimalToRoman(number);
    } else if (number >= 400) {
      roman += "CD";
      number -= 400;
      decimalToRoman(number);
    } else if (number >= 100) {
      roman += "C";
      number -= 100;
      decimalToRoman(number);
    } else if (number >= 90) {
      roman += "XC";
      number -= 90;
      decimalToRoman(number);
    } else if (number >= 50) {
      roman += "L";
      number -= 50;
      decimalToRoman(number);
    } else if (number >= 40) {
      roman += "XL";
      number -= 40;
      decimalToRoman(number);
    } else if (number >= 10) {
      roman += "X";
      number -= 10;
      decimalToRoman(number);
    } else if (number >= 9) {
      roman += "IX";
      number -= 9;
      decimalToRoman(number);
    } else if (number >= 5) {
      roman += "V";
      number -= 5;
      decimalToRoman(number);
    } else if (number >= 4) {
      roman += "IV";
      number -= 4;
      decimalToRoman(number);
    } else if (number >= 1) {
      roman += "I";
      number -= 1;
      decimalToRoman(number);
    }
  }
};

const checkInput = () => {
  const numberInt = parseInt(number.value);
  roman = "";

  if (!number.value || isNaN(numberInt)) {
    output.classList.add("invalid");
    output.classList.remove("valid");
    output.innerText = "Please enter a valid number";
    number.value = "";
    return;
  } else if (numberInt < 0) {
    output.classList.add("invalid");
    output.classList.remove("valid");
    output.innerText = "Please enter a number greater than or equal to 1";
    number.value = "";
    return;
  } else if (numberInt >= 4000) {
    output.classList.add("invalid");
    output.classList.remove("valid");
    output.innerText = "Please enter a number less than or equal to 3999";
    number.value = "";
    return;
  } else {
    output.classList.add("valid");
    output.classList.remove("invalid");
    decimalToRoman(numberInt);
    output.innerText = roman;
    number.value = "";
  }
};

convertBtn.addEventListener("click", checkInput);
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
