function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression safely
        display.value = eval(display.value.replace(/%/g, ' % '));
    } catch (error) {
        display.value = 'Error';
    }
}
