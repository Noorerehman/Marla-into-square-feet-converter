function convertValues(event) {
   event.preventDefault();
    var marla = parseFloat(document.getElementById("marla").value);
    
   
    var squareFeet = marla * 272.251;
    
   
    document.getElementById("result").innerHTML = marla + " Marla = " + squareFeet + " Square Feet.";
}