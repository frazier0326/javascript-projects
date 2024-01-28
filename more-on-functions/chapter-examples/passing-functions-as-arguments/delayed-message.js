function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 5000);

setTimeout(function () {
    console.log("The future is now!");
}, 3000);
