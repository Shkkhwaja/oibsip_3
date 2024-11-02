document.getElementById("convertBtn").addEventListener("click", function() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;

    var convertedTemperature;
    var resultUnit;

    if (unit === "°C") {
        convertedTemperature = (temperature * 9/5) + 32; 
        resultUnit = "°F";
    } else {
        convertedTemperature = (temperature - 32) * 5/9; 
        resultUnit = "°C"; 
    }

    document.getElementById("result").innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + resultUnit;
});
