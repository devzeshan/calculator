// Reference to the display content
const displayContent = document.getElementById('content');

// References to number buttons
const button0 = document.getElementById('value0');
const button1 = document.getElementById("value1");
const button2 = document.getElementById('value2');
const button3 = document.getElementById('value3');
const button4 = document.getElementById('value4');
const button5 = document.getElementById('value5');
const button6 = document.getElementById('value6');
const button7 = document.getElementById('value7');
const button8 = document.getElementById('value8');
const button9 = document.getElementById('value9');
const buttonDecimal = document.getElementById('valueDecimal');

// References to operator buttons
const additionButton = document.getElementById('addition');
const subtractionButton = document.getElementById('subtraction');
const multiplicationButton = document.getElementById('multiplication');
const divisionButton = document.getElementById('division');

// References to other buttons
const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

// Array for the antecedent
const antecedentValues = [];

// Array for the consequent
const consequentValues = [];
// minor change

const buttons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9];

buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
        if (displayContent.innerHTML !== "") {
            displayContent.innerHTML += index;
        } else {
            displayContent.innerHTML = index;
        }
        antecedentValues.push(index);
        antecedentValues.splice(0, antecedentValues.length, parseInt(antecedentValues.join('')));
    });
});