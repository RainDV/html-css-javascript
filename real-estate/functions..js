priceOut.innerHTML = priceRange.value; // Display the default slider value
spaceOut.innerHTML = spaceRange.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}

function priceChanged(value) {
    document.getElementById('priceOut').innerHTML = value;
}

function spaceChanged(value) {
    document.getElementById('spaceOut').innerHTML = value;
}