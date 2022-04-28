const inventory = newInventory();
move(inventory).to(0, 0);

const character = newImage('assets/green-character/static.gif')

// 5) Responding to a Character's Direction Change - creating a function to modify the character's image when it changes direction.
function handleDirectionChange(direction){  //direction as a parameter so it's in scope

    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}
    
move(character).withArrowKeys(100, 250, handleDirectionChange)

// This was 2) Write a moveCharacter Function of the activity. I've commented it out for reference later
// let direction = null;
// let x = 100;
// let y = 250;
// move(character).to(100, 250);

// function moveCharacter() {
//   if (direction === "west") {
//     x = x - 1;
//   }
//   if (direction === "north") {
//     y = y + 1;
//   }
//   if (direction === "east") {
//     x = x + 1;
//   }
//   if (direction === "south") {
//     y = y - 1;
//   }
//   character.style.left = x + "px";
//   character.style.bottom = y + "px";
// }

// setInterval(moveCharacter, 1);

// Defining function inline as sugggested in activity in module 3 web game part IV
// setInterval(function(){
//     if(direction === 'west'){
//         x = x - 1
//     }
//     if(direction === 'north'){
//         y = y + 1
//     }
//     if(direction === 'east'){
//         x = x + 1
//     }
//     if(direction === 'south'){
//         y = y - 1
//     }
//     character.style.left = x + 'px'
//     character.style.bottom = y + 'px'
// }, 1)

// 3) Change the Character's Direction with Arrow Keys
// document.addEventListener("keydown", function (e) {
//   if (e.repeat) return;

//   if (e.key === "ArrowLeft") {
//     direction = "west";
//   }
//   if (e.key === "ArrowUp") {
//     direction = "north";
//   }
//   if (e.key === "ArrowRight") {
//     direction = "east";
//   }
//   if (e.key === "ArrowDown") {
//     direction = "south";
//   }
// });

// document.addEventListener("keyup", function (e) {
//   direction = null;
// });

// move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/pillar.png")).to(350, 250);
move(newImage("assets/pine-tree.png")).to(450, 350);
move(newImage("assets/crate.png")).to(150, 350);
move(newImage("assets/well.png")).to(500, 575);
move(newItem("assets/sword.png")).to(500, 555);
move(newItem("assets/shield.png")).to(165, 335);
move(newItem("assets/staff.png")).to(600, 250);
