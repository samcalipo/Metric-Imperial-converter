/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInputEl = document.getElementById("user-input");
const convertButton = document.getElementById("convertBtn");
const meterAndFeetEl = document.getElementById("meter-feet");
const litersAndGallonsEl = document.getElementById("liters-gallons");
const kilogramsAndPoundsEl = document.getElementById("kilos-pounds");



convertButton.addEventListener("click", function(){
    let userInputValue = parseFloat(userInputEl.value);
    conversions(userInputValue);
})

function conversions(base) {
    //Length (Meter/Feet)
    let feet = (base * 3.281).toFixed(3);
    let meter = (base / 3.281).toFixed(3);
    
    meterAndFeetEl.innerHTML = `
        <p>${base} meters = ${feet} feet |</p>
        <p>${base} feet = ${meter} meters</p>
    `
    meter
    
    // Volumn (Liters/Gallons)
    let liters = (base * 0.264).toFixed(3);
    let gallons = (base / 0.264).toFixed(3);
    
    litersAndGallonsEl.innerHTML = `
        <p>${base} gallons = ${liters} liters |</p>
        <p>${base} liters = ${gallons} gallons</p>
    `
    meter
    
    // Mass (Kilograms / Pounds)
    let kilos = (base * 2.204).toFixed(3);
    let pounds = (base / 2.204).toFixed(3);
    
    kilogramsAndPoundsEl.innerHTML = `
        <p>${base} kilos = ${pounds} pounds |</p>
        <p>${base} pounds = ${kilos} kilos</p>
    `
    meter
}

