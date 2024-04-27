const task1Div = document.getElementById("task1");
const newDivTask1 = document.createElement("div");
newDivTask1.textContent = "Task 1 Completed";
task1Div.appendChild(newDivTask1);

const task2Div = document.getElementById("task2");

const inputGreeterName = document.createElement("input");
inputGreeterName.id = "greeterName";
inputGreeterName.placeholder = "Enter your name";
task2Div.appendChild(document.createTextNode("Name: "));
task2Div.appendChild(inputGreeterName);

const buttonDoGreet = document.createElement("button");
buttonDoGreet.id = "doGreet";
buttonDoGreet.textContent = "Greet";
task2Div.appendChild(buttonDoGreet);

const greetResultDiv = document.createElement("div");
greetResultDiv.id = "greetResult";
task2Div.appendChild(greetResultDiv);

buttonDoGreet.addEventListener("click", () => {
  greetResultDiv.textContent = "Hello, " + inputGreeterName.value;
});

const task3Div = document.getElementById("task3");

for (let i = 0; i < 3; i++) {
  const highlightDiv = document.createElement("div");
  highlightDiv.classList.add("highlight");
  highlightDiv.style.backgroundColor = "white";
  highlightDiv.textContent = "Click to highlight me";
  task3Div.appendChild(highlightDiv);

  highlightDiv.addEventListener("click", () => {
    if (highlightDiv.style.backgroundColor === "white") {
      highlightDiv.style.backgroundColor = "yellow";
    } else {
      highlightDiv.style.backgroundColor = "white";
    }
  });
}

const task4Div = document.getElementById("task4");

const inputCalcInput1 = document.createElement("input");
inputCalcInput1.id = "calcInput1";
task4Div.appendChild(inputCalcInput1);

const inputCalcInput2 = document.createElement("input");
inputCalcInput2.id = "calcInput2";
task4Div.appendChild(inputCalcInput2);

const buttonCalcButton = document.createElement("button");
buttonCalcButton.id = "calcButton";
buttonCalcButton.textContent = "Calculate";
task4Div.appendChild(buttonCalcButton);

const calcResultDiv = document.createElement("div");
calcResultDiv.id = "calcResult";
task4Div.appendChild(calcResultDiv);

buttonCalcButton.addEventListener("click", () => {
  const result = parseInt(inputCalcInput1.value) + parseInt(inputCalcInput2.value);
  calcResultDiv.textContent = result.toString();
});

const task5Div = document.getElementById("task5");

const buttonHideButton = document.createElement("button");
buttonHideButton.id = "hideButton";
buttonHideButton.textContent = "Hide";
task5Div.appendChild(buttonHideButton);

const buttonShowButton = document.createElement("button");
buttonShowButton.id = "showButton";
buttonShowButton.textContent = "Show";
task5Div.appendChild(buttonShowButton);

const hideShowResultDiv = document.createElement("div");
hideShowResultDiv.id = "hideShowResult";
hideShowResultDiv.style.width = "100px";
hideShowResultDiv.style.height = "100px";
hideShowResultDiv.style.backgroundColor = "red";
hideShowResultDiv.style.display = "none";
task5Div.appendChild(hideShowResultDiv);

buttonHideButton.addEventListener("click", () => {
  hideShowResultDiv.style.display = "none";
});

buttonShowButton.addEventListener("click", () => {
  hideShowResultDiv.style.display = "block";
});
