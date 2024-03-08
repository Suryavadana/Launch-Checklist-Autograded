// Write your JavaScript code here!
//const { myFetch, addDestinationInfo } =
// require("./scriptHelper");

window.addEventListener("load", function() {
    document.getElementById("launchForm").addEventListener("submit" , function(event){
        event.preventDefault();
        let pilot =document.getElementsByName("pilotName")[0].value;
        let copilot =document.getElementsByName("copilotName")[0].value;
        let fuelLevel = document.getElementsByName("fuelLevel")[0].value;
        let cargoLevel =document.getElementsByName("cargoMass")[0].value;
        let list = document.getElementById("faultyItems");
    formSubmission(document,list, pilot, copilot, fuelLevel, cargoLevel) 
    });

    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse=myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        let randomPlanet =pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        console.log(addDestinationInfo);
    })
    .catch(function(error) {
        console.error('Error fetching planets data:', error);
    });
 }); 