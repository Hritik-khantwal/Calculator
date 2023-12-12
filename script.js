let InputButton = document.querySelectorAll("form button");
let display = document.getElementById("calc");
let string = '';

// adding click events on buttons

for(let i = 0 ; i <InputButton.length ; i++){
    
  InputButton[i].addEventListener("click",function (){
    
    let number = this.getAttribute("value");
    
    calculation(number,display);

  });
  
}

// adding keypress events on buttons for some selective keys(here try creating an array which contains all these case's values and then iterate the array)

document.addEventListener("keydown",function(event){ 
  
  switch(event.key){
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":  
    case "Backspace":
    case "Delete":
    case "Enter":
    case "=":
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
      calculation(event.key,display);
    break;
  }

});


// main calculation  and error handling function

function calculation(buttonValue,displayScreen){

  switch(buttonValue){
      
    case "=":
    case "Enter":
      try{
        displayScreen.value = eval(string);
        string = displayScreen.value;
      }catch(error){
          displayScreen.value = "Error";
          string = "";
      }
      break;
    case "clr":
    case "Backspace":
      // displayScreen.value = string.replace(string[string.length-1],'');
      // string = displayScreen.value;
        displayScreen.value = displayScreen.value.slice(0, -1);
        string = displayScreen.value;

      break;
    case "bin":
    case "Delete":
      displayScreen.value = "";
      string = displayScreen.value;
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":

      switch(string[string.length-1]){
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
          string;
          break;
        default:
          string = displayScreen.value += buttonValue;
      }
      break;  
    default:
      string = displayScreen.value += buttonValue;
      
  }

}




