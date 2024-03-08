// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
     document.getElementById("missionTarget").innerHTML=
       ` <h2>Mission Destination</h2>
        <ol> 
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `;
 }

 function validateInput(testInput) {
    if(testInput === "")
    {
        return "Empty";
    }
    else if(isNaN(testInput))
    {
        return "Not a Number";
    }
    else
    {
        return "Is a Number";
    }


 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


    if(validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty"|| validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty")
    {
        alert("All fields are required!!");
        
        return;
    }
    if(validateInput(pilot)!=="Not a Number" || validateInput(copilot)!=="Not a Number" || validateInput(fuelLevel)!=="Is a Number" || validateInput(cargoLevel)!=="Is a Number")
    {
        alert("Invalid Input!!");
        
        return;
    }
    
    document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = 'red';
    } else {
        document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
    }

    if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = 'red';
    } else {
        document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
    }

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = 'green';
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await response.json(); 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {

    return planets[Math.floor(Math.random()*planets.length)];

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;