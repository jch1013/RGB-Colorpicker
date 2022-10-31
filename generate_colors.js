



// This function takes the string value of the rgb  color and reduces it to an array the three rgb values
function processColor(rgbString) {
    let colors = rgbString.split(/[\s,()]+/);
    let rgbArray = [parseInt(colors[1]), parseInt(colors[2]), parseInt(colors[3])];
    return rgbArray;
}

// This function takes one int value as a parameter and varies it to generate different colors
function rgbIncrement(rgbValue) {
    let increment = 10;
    let values = [];
    // iterate through 5 times to account for boxes on sides but not in middle (10 total, 2 per iteration added)
    for (let i = 1; i < 6; i++) {
        let high = rgbValue + i * increment;
        let low = rgbValue - i * increment;

        // Make sure rgb values are in range
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
    return values;
}

function changeColors(rgbString) {
    let colors = processColor(rgbString);
    // console.log(colors)
    let newReds = rgbIncrement(colors[0]);
    let newGreens = rgbIncrement(colors[1]);
    let newBlues = rgbIncrement(colors[2]);

    // update red colors
    for (let i = 0; i < newReds.length; i++) {
        redColors[i].style.backgroundColor = "rgb(" + newReds[i] + "," + colors[1] + "," + colors[2] + ")";
    }
    for (let i = 0; i < newGreens.length; i++) {
        greenColors[i].style.backgroundColor = "rgb(" + colors[0] + "," + newGreens[i] + "," + colors[2] + ")";
    }
    for (let i = 0; i < newReds.length; i++) {
        blueColors[i].style.backgroundColor = "rgb(" + colors[0] + "," + colors[1] + "," + newBlues[i] + ")";
    }
    // console.log(newGreens);
}

// Putting it all together and calling functions
const redColors = document.querySelectorAll('#vary-red .color');
const greenColors = document.querySelectorAll('#vary-green .color');
const blueColors = document.querySelectorAll('#vary-blue .color');
const starterColors = document.querySelectorAll('.starter-color');
const generatedColors = document.querySelectorAll('.color');
console.log(generatedColors.length)

// Adding event listeners for starter colors
for (let i = 0; i < starterColors.length; i++) {
    starterColors[i].addEventListener('click', () => {
        let starterBackground = window.getComputedStyle(starterColors[i], null).getPropertyValue("background-color");
        changeColors(starterBackground);

    })
}

// Adding event listeners for generated colors
for (let i = 0; i < generatedColors.length; i++) {
    generatedColors[i].addEventListener('click', () => {
        let generatedBackground = window.getComputedStyle(generatedColors[i], null).getPropertyValue("background-color");
        console.log(generatedBackground);
        changeColors(generatedBackground);

    })
}

