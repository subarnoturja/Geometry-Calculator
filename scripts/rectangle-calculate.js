function calculateRectangleArea(){
    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthInputText = lengthInput.value;
    const lengthInputNumber = parseFloat(lengthInputText);

    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthInputText = widthInput.value;
    const widthInputNumber = parseFloat(widthInputText);

    // calculate rectangle area
    const area = lengthInputNumber * widthInputNumber;

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}