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
let antecedentValues = [];

// Array for the consequent
let consequentValues = [];

// Array for the output
let solutionValues = [];

const buttons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9];


buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
        if (displayContent.innerHTML !== "") {
            displayContent.innerHTML += index;
        } else {
            displayContent.innerHTML = index;
        }
        
        arithmeticCheck(index);
    });
});


buttonDecimal.addEventListener("click", function() {
    if (displayContent.innerText.includes('.')) {
        return;
    } else if (displayContent.innerHTML != "") {
        displayContent.innerHTML += ".";
        antecedentValues.push(".");
        antecedentValues.splice(0, antecedentValues.length, parseInt(antecedentValues.join('')));
    }
})

function arithmeticCheck (index) {
    if (displayContent.innerText.includes('+') || displayContent.innerText.includes('-') || displayContent.innerText.includes('/') || displayContent.innerText.includes('*')) {
        consequentValues.push(index);
        consequentValues.splice(0, consequentValues.length, parseInt(consequentValues.join('')));
    } else {
        antecedentValues.push(index);
        antecedentValues.splice(0, antecedentValues.length, parseInt(antecedentValues.join('')));
    }
}


additionButton.addEventListener("click", function() {
    if (displayContent.innerText !== "") {
        // Check if the display content already contains an operator
        if (displayContent.innerText.includes('+') || displayContent.innerText.includes('-') || displayContent.innerText.includes('/') || displayContent.innerText.includes('*')) {
            return; // Do nothing if an operator is already present
        } if (displayContent.innerHTML != "") {
            // Add '+' to the display content
            displayContent.innerHTML += '+';
        }
    }
});

divisionButton.addEventListener("click", function() {
    if (displayContent.innerText !== "") {
        // Check if the display content already contains an operator
        if (displayContent.innerText.includes('+') || displayContent.innerText.includes('-') || displayContent.innerText.includes('/') || displayContent.innerText.includes('*')) {
            return; // Do nothing if an operator is already present
        } if (displayContent.innerHTML != "") {
            // Add '/' to the display content
            displayContent.innerHTML += '/';
        }
    }
});

multiplicationButton.addEventListener("click", function() {
    if (displayContent.innerText !== "") {
        // Check if the display content already contains an operator
        if (displayContent.innerText.includes('+') || displayContent.innerText.includes('-') || displayContent.innerText.includes('/') || displayContent.innerText.includes('*')) {
            return; // Do nothing if an operator is already present
        } if (displayContent.innerHTML != "") {
            // Add '*' to the display content
            displayContent.innerHTML += '*';
        }
    }
});

subtractionButton.addEventListener("click", function() {
    if (displayContent.innerText !== "") {
        // Check if the display content already contains an operator
        if (displayContent.innerText.includes('+') || displayContent.innerText.includes('-') || displayContent.innerText.includes('/') || displayContent.innerText.includes('*')) {
            return; // Do nothing if an operator is already present
        } if (displayContent.innerHTML != "") {
            // Add '-' to the display content
            displayContent.innerHTML += '-';
        }
    }
});


equalButton.addEventListener("click", function() {
    if (displayContent.innerText.includes('+')) {
        if (consequentValues && Array.isArray(consequentValues)) {
            // Ensure consequentValues is properly defined and an array
            solutionValues = add(antecedentValues, consequentValues);
            displayContent.innerText = solutionValues.toString(); // Replace innerText with the sum
        }
    } else if (displayContent.innerText.includes('-')) {
        if (consequentValues && Array.isArray(consequentValues)) {
            // Ensure consequentValues is properly defined and an array
            solutionValues = subtract(antecedentValues, consequentValues);
            displayContent.innerText = solutionValues.toString(); // Replace innerText with the difference
        }
    } else if (displayContent.innerText.includes('*')) {
        if (consequentValues && Array.isArray(consequentValues)) {
            // Ensure consequentValues is properly defined and an array
            solutionValues = multiply(antecedentValues, consequentValues);
            displayContent.innerText = solutionValues.toString(); // Replace innerText with the product
        }
    } else if (displayContent.innerText.includes('/')) {
        if (consequentValues && Array.isArray(consequentValues)) {
            // Ensure consequentValues is properly defined and an array
            solutionValues = divide(antecedentValues, consequentValues);
            displayContent.innerText = solutionValues.toString(); // Replace innerText with the quotient
        }
    }
    antecedentValues.splice(0, antecedentValues.length);
    consequentValues.splice(0, consequentValues.length);
});

function checkElement(x) {
    // Check if x is an array and not empty
    return Array.isArray(x) && x.length > 0;
}


function isInteger(num) {
    return num === parseInt(num);
}
    
function add(a, b) {
    let sum;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isInteger(numA) && isInteger(numB)) {
        sum = parseInt(numA) + parseInt(numB);
    } else {
        sum = numA + numB;
    }
    return sum;
}
    
function subtract(a, b) {
    let result;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isInteger(numA) && isInteger(numB)) {
        result = parseInt(numA) - parseInt(numB);
    } else {
        result = numA - numB;
    }
    return result;
}
    
function multiply(a, b) {
    let result;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isInteger(numA) && isInteger(numB)) {
         result = parseInt(numA) * parseInt(numB);
    } else {
        result = numA * numB;
    }
    return result;
}
    
function divide(a, b) {
    let result;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (numB === 0) {
        return "Cannot divide by zero";
    }
    if (isInteger(numA) && isInteger(numB)) {
        result = parseInt(numA) / parseInt(numB);
    } else {
         result = numA / numB;
    }
    return result;
}

clearButton.addEventListener("click", function() {
    // Clear display content
    displayContent.innerHTML = '';
    // Clear antecedentValues and consequentValues
    antecedentValues.splice(0, antecedentValues.length);
    consequentValues.splice(0, consequentValues.length);
});

deleteButton.addEventListener("click", function() {
    // Delete the last character from display content
    displayContent.innerText = displayContent.innerText.slice(0, -1);
    
    if (antecedentValues.length > 0) {
        for (let i = 0; i < antecedentValues.length; i++) {
            // Convert the number to a string
            let str = antecedentValues[i].toString();
            
            // Remove the last character from the string
            let newStr = str.slice(0, -1);
            
            // Convert the modified string back to a number
            antecedentValues[i] = parseInt(newStr);
        }
    } else if (consequentValues.length > 0) {
        for (let i = 0; i < consequentValues.length; i++) {
            // Convert the number to a string
            let str = consequentValues[i].toString();
            
            // Remove the last character from the string
            let newStr = str.slice(0, -1);
            
            // Convert the modified string back to a number
            consequentValues[i] = parseInt(newStr);
        }
    }
});
