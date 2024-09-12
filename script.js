// I started by creating the function object in which we can later add methods via the prototype object
function Player(name) {
    this.name = name; // Input argument intake
    this.level = 1; // Default is 1
    this.points = 0; // Default is 0
    this.newExp = 0; // Initialized as 0, will update via gainXp method.
}

// As per instructions, we utilize dot notation to add the method to the prototype object
Player.prototype.describe = function () {
    console.log(`Player ${this.name} is currently Level ${this.level} with ${this.points} Point(s)`);
}

// As per instructions, we utilize dot notation to add the method to the prototype object
Player.prototype.gainXp = function (newExp) {
    if (newExp <= 10 && newExp >= 1) { // Ensuring that the newExp is less than or equal to 10 AND greater than or equal to 1
        this.newExp = newExp;
        this.points += this.newExp; // We specify that we want to update the points (in-place?), not replace them with a new variable.
        if (this.points >= 10) { // Points continue to accrue, and as soon as we hit 10+ we begin the continuous level up cycle
            this.points -= 10; // Decrement the current points by 10 as we "level up" the player
            this.level += 1; // We add a level per occurrence of points reaching threshold of 10 points
        }
    }
    return this.level; // If you try to add a newExp value that exceeds 10 or is a negative number, it simply will not get added and return the most recent level value for the instance of Player
    // My goal here is to allow reasonable level-up increments (restrictions imposed: no de-levelling or levelling up an extreme amount in one go)
}

// Here, we aim to follow Traversy's example on how we should be able to utilize the object
let player1 = new Player("Joe");
let player2 = new Player("Not Joe");
player1.gainXp(5);
player1.gainXp(5);
player1.gainXp(5);
player1.gainXp(5);
player1.gainXp(7);
player1.gainXp(1);
player1.gainXp(2);
player1.gainXp(-11); // As expected, a number that doesn't meet our requirements is ignored

player2.gainXp(10);
player2.gainXp(5);
player2.gainXp(5);
player2.gainXp(1);
player1.gainXp(1000); // As expected, a number that doesn't meet our requirements is ignored


console.log(player1.describe(), player2.describe());
console.log(player1, player2);
// console.log(Object.getPrototypeOf("player1"));