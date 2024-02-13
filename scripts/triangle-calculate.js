function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBaseNumber = parseFloat(triangleBaseText);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeightNumber = parseFloat(triangleHeightText);
    
    // calculate triangle area
    const area = 0.5 * triangleBaseNumber * triangleHeightNumber;

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

