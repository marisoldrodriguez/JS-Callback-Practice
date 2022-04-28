function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

// 4) Refactoring Our Code in activity about callback functions Web Game Part IV
// 5) Responding to a Character's Direction Change - we need to call the callback where we change direction and we have to pass direction as a parameter in callback to have direction in scope.
  function moveWithArrowKeys(left, bottom, callback) {
    let direction = null;
    let x = left;
    let y = bottom;
    
    element.style.left = x + 'px'
    element.style.bottom = y + 'px'

    function moveCharacter() {
      if (direction === "west") {
        x -= 1;
      }
      if (direction === "north") {
        y += 1;
      }
      if (direction === "east") {
        x += 1;
      }
      if (direction === "south") {
        y -= 1;
      }
      element.style.left = x + "px";
      element.style.bottom = y + "px";
    }

    setInterval(moveCharacter, 1)

    document.addEventListener("keydown", function (e) {
        if (e.repeat) return;
      
        if (e.key === "ArrowLeft") {
          direction = "west";
        }
        if (e.key === "ArrowUp") {
          direction = "north";
        }
        if (e.key === "ArrowRight") {
          direction = "east";
        }
        if (e.key === "ArrowDown") {
          direction = "south";
        }
        callback(direction)  //direction as a parameter so it's in scope
      });
      
      document.addEventListener("keyup", function (e) {
        direction = null;
        callback(direction)  //direction as a parameter so it's in scope
      })
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}


