// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){

    let rocketPositionX = 0;
    let rocketPositionY = 0;
    const rocket = document.getElementById('rocket');
    let altitude = 0; 

    const takeoffButton = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const landingButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');


    takeoffButton.addEventListener('click', function(){
        let shouldTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (shouldTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });
    landingButton.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = 'The shuttle has landed';
        shuttleBackground.style.backgroundColor = 'green';
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
    });
    abortButton.addEventListener('click', function(){
        let shouldAbort = window.confirm("Confirm that you want to abort the mission.");
        if (shouldAbort) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = 'green';
            altitude = 0;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === "left") {
            rocketPositionX -= 10;
            rocket.style.marginLeft = rocketPositionX + 'px';
        }
        if (event.target.id === "right") {
            rocketPositionX += 10;
            rocket.style.marginLeft = rocketPositionX + 'px';
        }
        if (event.target.id === "up") {
            rocketPositionY += 10;
            rocket.style.marginBottom = rocketPositionY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "down") {
            rocketPositionY -= 10;
            rocket.style.marginBottom = rocketPositionY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });
});