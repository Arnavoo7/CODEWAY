//Grabbing the elements and storing them in a variable
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

//Keeping output as empty string at first
let output = "";

//Performing operations
const calc = (btnValue) => {

//For Debugging purpose
//console.log(btnValue);

  //If there is no data at first and if user typed = and output is blank inside stmt check if % present then replace to decimal value
  if (btnValue === "=" && output !== "")
    output = eval(output.replace("%", "/100"));
  else if (btnValue === "AC") output = "";
  //reducing char from backside by slice cutting it so from (index 0 to index-1)
  else if (btnValue === "DEL") output = output.toString().slice(0, -1);
  //if btnValue is special chars or numbers 
  else
     output += btnValue;

  //Final result storing
  display.value = output;
};



//Getting the user typed value on each clicked event and callinng callback function with argument (typed value)
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calc(e.target.value));
});
