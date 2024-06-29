const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const arabicToRoman = () => {
  
  const input = document.getElementById("number").value;
  
   if (input === "") {
    output.textContent = "Please enter a valid number";
    return;
    }
    
  const numberInput = parseInt(input);

    if (numberInput >= 4000) {
    output.textContent = "Please enter a number less than or equal to  3999";
    return;
    } else if (numberInput < 0) { 
      output.textContent = "Please enter a number greater than or equal to 1";
    return;
    }else {

  const romanValue = [
    { letter: "M", value: 1000},
    { letter: "CM", value: 900},
    { letter: "D", value: 500},
    { letter: "CD", value: 400},
    { letter: "C", value: 100},
    { letter: "XC", value: 90},
    { letter: "L", value: 50},
    { letter: "XL", value: 40},
    { letter: "X", value: 10},
    { letter: "IX", value: 9},
    { letter: "V", value: 5},
    { letter: "IV", value: 4},
    { letter: "I", value: 1},
  ];

  let result = "";
  let num = numberInput;

  for (let i= 0; i< romanValue.length; i++) {
    while (num >= romanValue[i].value) {
      result += romanValue[i].letter;
      num -= romanValue[i].value;
    }
 }
  output.textContent = result;
}
};
convertBtn.addEventListener('click', arabicToRoman);

