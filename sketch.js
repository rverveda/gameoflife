let gameboard = [];
let nextgameboard = [];
let gennumb = 0;
let population = 0;
let allowed = false;


function setup() {
  let mycanvas = createCanvas(600, 600);
  mycanvas.parent('canvas')
  //Create array of person objects
  for (let y = 0; y < height; y += 10) {
    temp = [];
    for (let x = 0; x < width; x += 10) {
      // Create the new person object
      temp[x] = new person(x, y)
    }
    gameboard[y] = temp;
  }
}

//Allows user to change a squares state when mouse button clicked
function mousePressed() {
  for (let j = 0; j < height; j += 10) {
    for (let i = 0; i < width; i += 10) {
      gameboard[j][i].clicked()
    }
  }
}

//Allows user to change a squares state when the mouse is dragged
function mouseDragged() {
  for (let j = 0; j < height; j += 10) {
    for (let i = 0; i < width; i += 10) {
      gameboard[j][i].clicked()
    }
  }
}

//Determines the population of the current generation
function populationcount(gameboard) {
  population = 0;
  for (let y = 0; y < height; y += 10) {
    for (let x = 0; x < width; x += 10) {
      if (gameboard[y][x].state == 1) {
        population++
      }
    }
  }
}

//Updates the text on screen to display the generation and population
function updategeneration() {
  if (allowed) {
    gennumb++
  }
  let generationelem = document.getElementById("generation");
  generationelem.innerText = `Generation: ${gennumb} Population: ${population}`
}

//Resets the gameboard
function resetbutton() {
  let runvalue = document.querySelector('#runbutton');
  for (let j = 0; j < height; j += 10) {
    for (let i = 0; i < width; i += 10) {
      gameboard[j][i].state = 0;
    }
  }
  allowed = false;
  gennumb = 0;
  runvalue.value = 'Run';
}

//Starts advancing generations
function runbutton() {
  let runvalue = document.querySelector('#runbutton');
  if (allowed == false) {
    allowed = true;
    runvalue.value = 'Stop';
  } else {
    allowed = false;
    runvalue.value = 'Run';
  }
}

//Randomly decides if a squares state is 0 or 1
function randombutton() {
  let runvalue = document.querySelector('#runbutton');
  for (let j = 0; j < height; j += 10) {
    for (let i = 0; i < width; i += 10) {
      gameboard[j][i].state = round(random());
    }
  }
  gennumb = 0;
  allowed = false;
  runvalue.value = 'Run';
}

//Draws a few gliders on the gameboard
function gliderbutton() {
  let runvalue = document.querySelector('#runbutton');
  resetbutton();
  for (let inc = 0; inc < 9; inc++) {
    gameboard[20 + 70 * inc][0].state = 1; gameboard[30 + 70 * inc][10].state = 1; gameboard[10 + 70 * inc][20].state = 1; gameboard[20 + 70 * inc][20].state = 1; gameboard[30 + 70 * inc][20].state = 1;
  }
  for (let inc = 0; inc < 9; inc++) {
    gameboard[20][0 + 70*inc].state = 1; gameboard[30][10 + 70*inc].state = 1; gameboard[10][20 + 70*inc].state = 1; gameboard[20][20 + 70*inc].state = 1; gameboard[30][20 + 70*inc].state = 1;
  }
  gennumb = 0;
  allowed = false;
  runvalue.value = 'Run';
}

//Draws a Gosper Glider Gun
function glidergunbutton() {
  let runvalue = document.querySelector('#runbutton');
  resetbutton();
  gameboard[60][10].state = 1; gameboard[60][20].state = 1; gameboard[70][10].state = 1; gameboard[70][20].state = 1; gameboard[50][110].state = 1; gameboard[60][110].state = 1; gameboard[70][110].state = 1; gameboard[40][120].state = 1; gameboard[80][120].state = 1;
  gameboard[30][130].state = 1; gameboard[90][130].state = 1; gameboard[30][140].state = 1; gameboard[90][140].state = 1; gameboard[60][150].state = 1; gameboard[40][160].state = 1; gameboard[80][160].state = 1; gameboard[50][170].state = 1; gameboard[60][170].state = 1;
  gameboard[70][170].state = 1; gameboard[60][180].state = 1; gameboard[30][210].state = 1; gameboard[40][210].state = 1; gameboard[50][210].state = 1; gameboard[30][220].state = 1; gameboard[40][220].state = 1; gameboard[50][220].state = 1; gameboard[20][230].state = 1;
  gameboard[60][230].state = 1; gameboard[10][250].state = 1; gameboard[20][250].state = 1; gameboard[60][250].state = 1; gameboard[70][250].state = 1; gameboard[30][350].state = 1; gameboard[40][350].state = 1; gameboard[30][360].state = 1; gameboard[40][360].state = 1;
  gennumb = 0;
  allowed = false;
  runvalue.value = 'Run';
}

//Draws some Pulsars
function pulsarbutton() {
  let runvalue = document.querySelector('#runbutton');
  resetbutton();
  for (let y = 0; y < 3; y++){
    for (let x = 0; x < 3; x++){
      gameboard[30 + 200*y][60 + 200*x].state = 1; gameboard[30 + 200*y][120 + 200*x].state = 1; gameboard[40 + 200*y][60 + 200*x].state = 1; gameboard[40 + 200*y][120 + 200*x].state = 1; gameboard[50 + 200*y][60 + 200*x].state = 1; gameboard[50 + 200*y][70 + 200*x].state = 1; gameboard[50 + 200*y][110 + 200*x].state = 1; gameboard[50 + 200*y][120 + 200*x].state = 1; gameboard[70 + 200*y][20 + 200*x].state = 1; gameboard[70 + 200*y][30 + 200*x].state = 1;
      gameboard[70 + 200*y][40 + 200*x].state = 1; gameboard[70 + 200*y][70 + 200*x].state = 1; gameboard[70 + 200*y][80 + 200*x].state = 1; gameboard[70 + 200*y][100 + 200*x].state = 1; gameboard[70 + 200*y][110 + 200*x].state = 1; gameboard[70 + 200*y][140 + 200*x].state = 1; gameboard[70 + 200*y][150 + 200*x].state = 1; gameboard[70 + 200*y][160 + 200*x].state = 1; gameboard[150 + 200*y][70 + 200*x].state = 1; gameboard[80 + 200*y][40 + 200*x].state = 1;
      gameboard[80 + 200*y][60 + 200*x].state = 1; gameboard[80 + 200*y][80 + 200*x].state = 1; gameboard[80 + 200*y][100 + 200*x].state = 1; gameboard[80 + 200*y][120 + 200*x].state = 1; gameboard[80 + 200*y][140 + 200*x].state = 1; gameboard[90 + 200*y][60 + 200*x].state = 1; gameboard[90 + 200*y][70 + 200*x].state = 1; gameboard[90 + 200*y][110 + 200*x].state = 1; gameboard[90 + 200*y][120 + 200*x].state = 1; gameboard[110 + 200*y][60 + 200*x].state = 1;
      gameboard[110 + 200*y][70 + 200*x].state = 1; gameboard[110 + 200*y][110 + 200*x].state = 1; gameboard[110 + 200*y][120 + 200*x].state = 1; gameboard[120 + 200*y][40 + 200*x].state = 1; gameboard[120 + 200*y][60 + 200*x].state = 1; gameboard[120 + 200*y][80 + 200*x].state = 1; gameboard[120 + 200*y][100 + 200*x].state = 1; gameboard[120 + 200*y][120 + 200*x].state = 1; gameboard[120 + 200*y][140 + 200*x].state = 1; gameboard[130 + 200*y][20 + 200*x].state = 1;
      gameboard[130 + 200*y][30 + 200*x].state = 1; gameboard[130 + 200*y][40 + 200*x].state = 1; gameboard[130 + 200*y][70 + 200*x].state = 1; gameboard[130 + 200*y][80 + 200*x].state = 1; gameboard[130 + 200*y][100 + 200*x].state = 1; gameboard[130 + 200*y][110 + 200*x].state = 1; gameboard[130 + 200*y][140 + 200*x].state = 1; gameboard[130 + 200*y][150 + 200*x].state = 1; gameboard[130 + 200*y][160 + 200*x].state = 1; gameboard[150 + 200*y][60  + 200*x].state = 1;
      gameboard[150 + 200*y][110 + 200*x].state = 1; gameboard[150 + 200*y][120 + 200*x].state = 1; gameboard[160 + 200*y][60 + 200*x].state = 1; gameboard[160 + 200*y][120 + 200*x].state = 1; gameboard[170 + 200*y][60 + 200*x].state = 1; gameboard[170 + 200*y][120 + 200*x].state = 1;
    }
  }
  gennumb = 0;
  allowed = false;
  runvalue.value = 'Run';
}

//Draws a Die Hard pattern. A pattern that will die
function diehardbutton() {
  let runvalue = document.querySelector('#runbutton');
  resetbutton()
  gameboard[270][310].state = 1; gameboard[280][250].state = 1; gameboard[280][260].state = 1; gameboard[290][260].state = 1; gameboard[290][300].state = 1; gameboard[290][310].state = 1; gameboard[290][320].state = 1;
  gennumb = 0;
  allowed = false;
  runvalue.value = 'Run';
}

function draw() {
  background(0);
  //Iterate over the canvas and draw all of the squares(people) using their current state
  for (let j = 0; j < height; j += 10) {
    for (let i = 0; i < width; i += 10) {
      gameboard[j][i].drawsqr();
      gameboard[j][i].checkstate(allowed);
      gameboard[j][i].nextgen(allowed);
    }
  }
  // Change all the states of the current generation to that of the new generation
  if (allowed) {
    for (let j = 0; j < height; j += 10) {
      for (let i = 0; i < width; i += 10) {
        let index = i + j * (width / 10)
        gameboard[j][i].state = nextgameboard[index]
      }
    }
  }
  populationcount(gameboard)
  updategeneration(allowed)
}

// Create the person class
class person {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.sidelength = 10;
    this.state = 0;
    this.numbneighbours;
  }

  //Function to draw the squares square
  drawsqr() {
    stroke(51)
    //Use map to convert 0 or 1 into 0 or 255 respectively 
    fill(map(this.state, 0, 1, 0, 255))
    square(this.x, this.y, this.sidelength)
  }

  //Function to check the state of each squares neighbours
  checkstate(allowed) {
    if (allowed) {
      let neighbours = [];
      let x = this.x;
      let y = this.y;
      //Iterate over every square and get array of its neighbours states
      if (this.x == 0 && this.y == 0) {
        neighbours = [gameboard[y][x + 10].state, gameboard[y + 10][x + 10].state, gameboard[y + 10][x].state];
      } else if (x == width - 10 && this.y == 0) {
        neighbours = [gameboard[y][x - 10].state, gameboard[y + 10][x].state, gameboard[y + 10][x - 10].state];
      } else if (this.x == 0 && this.y == height - 10) {
        neighbours = [gameboard[y - 10][x].state, gameboard[y - 10][x + 10].state, gameboard[y][x + 10].state];
      } else if (this.x == width - 10 && this.y == height - 10) {
        neighbours = [gameboard[y - 10][x - 10].state, gameboard[y - 10][x].state, gameboard[y][x - 10].state];
      } else if (this.y == 0) {
        neighbours = [gameboard[y][x - 10].state, gameboard[y][x + 10].state, gameboard[y + 10][x + 10].state, gameboard[y + 10][x].state, gameboard[y + 10][x - 10].state];
      } else if (this.y == height - 10) {
        neighbours = [gameboard[y - 10][x - 10].state, gameboard[y - 10][x].state, gameboard[y - 10][x + 10].state, gameboard[y][x + 10].state, gameboard[y][x - 10].state];
      } else if (this.x == 0) {
        neighbours = [gameboard[y - 10][x].state, gameboard[y - 10][x + 10].state, gameboard[y][x + 10].state, gameboard[y + 10][x + 10].state, gameboard[y + 10][x].state];
      } else if (this.x == width - 10) {
        neighbours = [gameboard[y - 10][x - 10].state, gameboard[y - 10][x].state, gameboard[y + 10][x].state, gameboard[y + 10][x - 10].state, gameboard[y][x - 10].state];
      } else {
        neighbours = [gameboard[y - 10][x - 10].state, gameboard[y - 10][x].state, gameboard[y - 10][x + 10].state, gameboard[y][x + 10].state, gameboard[y + 10][x + 10].state, gameboard[y + 10][x].state, gameboard[y + 10][x - 10].state, gameboard[y][x - 10].state];
      }
      //Add up the state of squares neighbours. Since state is 0 or 1 the total is the number of neighbours
      this.numbneighbours = eval(neighbours.join('+'));
    }
  }

  //Function that uses the numbneighbours to determine the squares state in the next generation.
  nextgen(allowed) {
    if (allowed) {
      let index = this.x + this.y * (width / 10)
      if (this.state == 1 && this.numbneighbours < 2) {
        nextgameboard[index] = 0;
      } else if (this.state == 1 && (this.numbneighbours == 2 || this.numbneighbours == 3)) {
        nextgameboard[index] = 1;
      } else if (this.state == 1 && this.numbneighbours > 3) {
        nextgameboard[index] = 0;
      } else if (this.state == 0 && this.numbneighbours == 3) {
        nextgameboard[index] = 1;
      } else {
        nextgameboard[index] = this.state;
      }
    }
  }

  //Function that changes the state of a square if the mouse is within it
  clicked() {
    if (mouseX < this.x + 10 && mouseX > this.x && mouseY > this.y && mouseY < this.y + 10) {
      if (this.state == 1) {
        this.state = 0;
      } else {
        this.state = 1;
      }
    }
  }

}