var queen = {
  directions: "S",
  position: {
    x: 0,
    y: 4
  }
};
function boundaryCheck(position) {
  if (position < 0 || position > 7) {
    return false;
  } else {
    return true;
  }
}

var temp, temp1;
function changeQueenPosition(steps, direction) {
  switch (direction) {
    case "N":
      temp = queen.position.x - steps;
      if (boundaryCheck(temp) == true) {
        queen.position.x = temp;
      } else {
        console.log("Queen outside the war field");
      }
      break;
    case "S":
      temp = queen.position.x + steps;
      if (boundaryCheck(temp) == true) {
        queen.position.x = temp;
        console.log(queen.position.x);
      } else {
        console.log("queen outside the war field");
      }
      break;
    case "E":
      temp = queen.position.y + steps;
      if (boundaryCheck(temp) == true) {
        queen.position.y = temp;
      } else {
        console.log("queen outside the war field");
      }
      break;
    case "W":
      temp = queen.position.y - steps;
      if (boundaryCheck(temp) == true) {
        queen.position.y = temp;
      } else {
        console.log("queen outside the war field");
      }
      break;
    case "NW":
      temp = queen.position.x - steps;

      temp1 = queen.position.y - steps;
      if (boundaryCheck(temp) == true && boundaryCheck(temp1) == true) {
        queen.position.x = temp;
        queen.position.y = temp1;
      } else {
        console.log("queen outside the war field");
      }
      break;

    case "NE":
      temp = queen.position.x - steps;
      temp1 = queen.position.y + steps;
      if (boundaryCheck(temp) == true && boundaryCheck(temp1) == true) {
        queen.position.x = temp;
        queen.position.y = temp1;
      } else {
        console.log("Queen outside the war field");
      }
      break;

    case "SE":
      temp = queen.position.x + steps;
      temp1 = queen.position.y + steps;
      if (boundaryCheck(temp) == true && boundaryCheck(temp) == true) {
        queen.position.x = temp;
        queen.position.y = temp1;
        console.log(queen.position.x);
      } else {
        console.log("queen outside the war field");
      }
      break;
    case "SW":
      temp = queen.position.x + steps;
      temp1 = queen.position.y - steps;
      if (boundaryCheck(temp) == true && boundaryCheck(temp) == true) {
        queen.position.x = temp;
        console.log(queen.position.x);
      } else {
        console.log("queen outside the war field");
      }

      break;
  }
}
var str = window.prompt("Enter steps");
var steps, dir;
var res = str.split(" ");
for (let i = 0; i < res.length; i++) {
  steps = parseInt(res[i].slice(res[i].length - 1, res[i].length));
  dir = res[i].slice(0, res[i].length - 1);
  changeQueenPosition(steps, dir);
}
var positionLog = [
  ["A8", "A7", "A6", "A5", "A4", "A3", "A2", "A1"][
    ("B8", "B7", "B6", "B5", "B4", "B3", "B2", "B1")
  ],
  ["C8", "C7", "C6", "C5", "C4", "C3", "C2", "C1"],
  ["D8", "D7", "D6", "D5", "D4", "D3", "D2", "D1"],
  ["E8", "E7", "E6", "E5", "E4", "E3", "E2", "E1"],
  ["F8", "F7", "F6", "F5", "F4", "F3", "F2", "F1"],
  ["G8", "G7", "G6", "G5", "G4", "G3", "G2", "G1"],
  ["H8", "H7", "H6", "H5", "H4", "H3", "H2", "H1"],
  ["G8", "G7", "G6", "G5", "H4", "G3", "G2", "G1"]
];
console.Log(PositionLog[queen.position.x][queen.position.y]);
