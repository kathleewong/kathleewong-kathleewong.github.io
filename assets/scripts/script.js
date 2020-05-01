let carouselWidth = 600; 

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");


let imageNum = 0;


function showNextImage() {
    imageNum = imageNum + 1;
    let calculation1 = carouselWidth * -imageNum;
    imageRow.style.left = calculation1 + "px";
    checkControls();
}

nextButton.onclick = showNextImage;

function showPrevImage() {
    imageNum = imageNum - 1;
    let calculation2 = carouselWidth * -imageNum;
    imageRow.style.left = calculation2 + "px";
    checkControls();
}

prevButton.onclick = showPrevImage;


let totalImages = document.getElementsByClassName("carousel-image").length;

checkControls();


function checkControls() {
	if (imageNum === 0) {
        prevButton.classList.add('hidden');
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove('hidden');
	}
	if (imageNum === totalImages - 1) {
		nextButton.classList.add('hidden');
	}
	else if (nextButton.classList.contains("hidden")) {
        nextButton.classList.remove('hidden');
	} 
}

new TypeIt("#companionMethods", {
    speed: 200,
    waitUntilVisible: true
  })
    .type("ONE BOAT")
    .pause(500)
    .delete(8)
    .pause(500)
    .type("ONE TEAM")
    .pause(500)
    .delete(8)
    .pause(500)
    .type("ONE BOAT, ONE TEAM")
    .go();
