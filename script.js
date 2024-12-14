function convertToCelsius() {
    // Get the value from the input field
    const celsiusValue = document.getElementById("CelsiusValue").value;

    // Validate the input
    if (celsiusValue === "") {
        document.getElementById("result").innerText = "Please enter a valid Celsius value.";
        return;
    } 

//it shows the kelvin of today
const variable = celsiusValue;
//into celsius
let celsius = Math.floor(variable - 273.15);
//convert to farhenheit
let farhenheit = celsius * (9 / 5) + 32;
//making it a decimal free code
let Farenheit = Math.floor(farhenheit);


    // Display the result
    document.getElementById("result").innerText = 'the tempearature is ' + celsius + " degree celsius";
}


