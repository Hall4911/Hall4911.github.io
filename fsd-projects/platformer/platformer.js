$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid(); //disable when done


    // TODO 2 - Create Platforms
createPlatform(20, 500, 225, 12);
createPlatform(385, 650, 150, 12);
createPlatform(675, 555, 75, 12);
createPlatform(875, 440, 200, 12);
createPlatform(1150, 500, 215, 12);
createPlatform(1200, 310, 60, 12);
createPlatform(770, 200, 215, 12);
createPlatform(325, 250, 165, 12)




    // TODO 3 - Create Collectables
createCollectable("database", 1300, 450 );
createCollectable("database", 340, 200 );
createCollectable("database", 585, 250 );
    
    // TODO 4 - Create Cannons
createCannon("right", 780, 70);
createCannon("right", 600, 800);
createCannon("top", 1000, 800)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
