const techArray = [
  "SQL Developer",
  "Mainframe Developer",
  "Software Developer",
  "Agile Advocate",
  "Brilliant Collaborator",
  "Front End Developer",
];

const texy = document.getElementById("textdisplay");
let counter = 0;

setInterval(() => {
  if (counter === 6) {
    counter = 0;
  }
  if (counter === 0) {
    texy.innerText = techArray[0];
  } else if (counter === 1) {
    texy.innerText = techArray[1];
  } else if (counter === 2) {
    texy.innerText = techArray[2];
  } else if (counter === 3) {
    texy.innerText = techArray[3];
  } else if (counter === 4) {
    texy.innerText = techArray[4];
  } else if (counter === 5) {
    texy.innerText = techArray[5];
  }
  counter++;
}, 1500);
