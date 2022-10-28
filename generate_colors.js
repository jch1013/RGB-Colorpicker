const redColors = document.querySelectorAll('#vary-red .color');
console.log(redColors.length);
let bg;

for (let i = 0; i < redColors.length; i++) {
    bg = window.getComputedStyle(redColors[i], null).getPropertyValue("background-color");
    console.log(bg);
}


// This function takes the string value of the rgb  color and reduces it to an array the three rgb values
function processColor(rgbString) {
    let colors = rgbString.split(/[\s,()]+/);
    let rgbArray = [colors[1], colors[2], colors[3]];
    console.log(rgbArray);
    return rgbArray;
}

// This function takes one int value as a parameter and varies it to generate different colors
function rgbIncrement(rgbValue) {
    let increment = 3;
    let values = [];
    // iterate through 5 times to account for boxes on sides but not in middle (10 total, 2 per iteration added)
    for (let i = 1; i < 6; i++) {
        let high = rgbValue + i * increment;
        let low = rgbValue - i * increment;

        if (high > 255) {
            high = 255;
        }
        if (low < 0) {
            low = 0;
        }

        values.push(low);
        values.push(high);
    }
    values.push(rgbValue);
    values.sort(function(a,b) {
        return a - b;
    });
    console.log(values);
    return values;
}


rgbIncrement(10);