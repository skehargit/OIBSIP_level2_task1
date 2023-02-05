const display = document.getElementById('display');
const buttons = document.querySelectorAll("button");


buttons.forEach((item) => {
  item.onclick = () => {
    let last = display.innerText.split('')
    
  if(last[last.length-1]=="-"&&last[last.length-2]=="-"||last[last.length-1]=="*"&&last[last.length-2]=="*"||last[last.length-1]=="/"&&last[last.length-2]=="/"||last[last.length-1]+last[last.length-2]=="++"){
    display.innerText = display.innerText.slice(0,-1);
    // console.log(last)
  }
    if (item.value == "AC") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      display.innerText = display.innerText.slice(0,-1);
    } else if (display.innerText != "" && item.value == "=") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.value == "="||display.innerText == "" && item.value == "+" ||display.innerText == "" && item.value == "*" ||display.innerText == "" && item.value == "/" ) {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 500);
    } else {
      display.innerText += item.value;
    }
  };
});