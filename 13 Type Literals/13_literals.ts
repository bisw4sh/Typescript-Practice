type CardinalDirection = "North" | "East" | "South" | "West";

function move(distance: number, direction: CardinalDirection) {
    // ...
    console.log(distance?? "Not Provided", direction?? "None")
}

move(1,"North"); // Okay
// move(1,"Nurth"); //! Error