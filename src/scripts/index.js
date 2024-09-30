const images = [
  "src/assets/images/image1.jpg",
  "src/assets/images/image2.jpg",
  "src/assets/images/image3.jpg",
  "src/assets/images/image4.jpg",
];

let imageIndex = 0;

const imageDisplay = document.getElementById("imageDisplay");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const changeImage = () => {
  imageDisplay.src = images[imageIndex];
  previousButton.disabled = imageIndex === 0;
  nextButton.disabled = imageIndex === images.length - 1;
};

const handleButtonClick = (direction) => {
  direction === "previous"
    ? imageIndex > 0 && imageIndex--
    : direction === "next" && imageIndex < images.length - 1 && imageIndex++;
  changeImage();
};

previousButton.addEventListener("click", () => handleButtonClick("previous"));
nextButton.addEventListener("click", () => handleButtonClick("next"));

document.addEventListener("keydown", (event) => {
  event.key === "ArrowLeft"
    ? handleButtonClick("previous")
    : event.key === "ArrowRight" && handleButtonClick("next");
});

changeImage();
