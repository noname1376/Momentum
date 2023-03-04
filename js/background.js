const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const image_num = Math.floor(Math.random() * images.length);

let chosenImage = "";

if (image_num === 0) {
  document.body.style.backgroundImage = "url(img/0.jpeg)";
} else if (image_num === 1) {
  document.body.style.backgroundImage = "url(img/1.jpeg)";
} else {
  document.body.style.backgroundImage = "url(img/2.jpeg)";
}
