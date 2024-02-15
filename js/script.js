document.getElementById('suhu-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get input value
    var suhuInput = parseFloat(document.getElementById('suhu').value);

    if (isNaN(suhuInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Perform temperature conversion
    var suhuCelcius = convertToCelsius(suhuInput);
    var suhuFahrenheit = convertToFahrenheit(suhuInput);

    // Display results
    document.getElementById('hasil-celcius').innerText = "Suhu dalam Celcius: " + suhuCelcius.toFixed(2) + "°C";
    document.getElementById('hasil-fahrenheit').innerText = "Suhu dalam Fahrenheit: " + suhuFahrenheit.toFixed(2) + "°F";

    // Show the result container
    document.getElementById('hasil').style.display = 'block';
});

function resetForm() {
    document.getElementById('suhu-form').reset();
    document.getElementById('hasil').style.display = 'none';
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
