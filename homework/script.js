document.getElementById('add').addEventListener('click', function() {
    calculate('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    calculate('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    calculate('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    calculate('divide');
});

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const resultField = document.getElementById('result');
    
    
    let result;
    
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultField.value = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        default:
            result = 0;
    }
    
    resultField.value = result;
}
