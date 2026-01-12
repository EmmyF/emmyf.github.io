// -----Slideshow----- //

//init image sets
trap = ["images/trap33.jpg", "images/trap7.jpg", "images/trap9.jpg", "images/trap10.jpg", "images/trap15.jpg", "images/trap23.jpg", "images/trap31.jpg", "images/trap37.jpg", "images/trap42.jpg", "images/trap43.jpg"];
improvientation25 = ["images/rip17.jpg", "images/rip21.jpg", "images/rip22.jpg", "images/rip25.jpg", "images/rip4.jpg", "images/rip23.jpg", "images/rip24.jpg", "images/rip10.jpg", "images/rip18.jpg", "images/rip19.jpg"];
everybody = ["images/dm12.jpg", "images/dm1.jpg", "images/dm14.jpg", "images/dm8.jpg", "images/dm10.jpg", "images/dm11.jpg", "images/dm17.jpg", "images/dm24.jpg", "images/dm22.jpg", "images/dm27.jpg"];
npsNowheresville = ["images/nps1.jpg", "images/nps2.jpg", "images/nps3.jpg", "images/nps4.jpg", "images/nps5.jpg", "images/nps6.jpg"];
rip = ["images/rip46.jpeg", "images/rip8.jpg", "images/rip39.jpeg", "images/rip14.jpg", "images/rip45.jpeg", "images/rip38.jpeg", "images/rip47.jpeg", "images/rip11.jpg", "images/rip51.jpg", "images/rip44.jpeg", "images/rip34.jpg", "images/rip30.jpg"];
npsSpacePlay = ["images/nps7.jpg", "images/nps8.jpg", "images/nps9.jpg", "images/nps11.jpg"];


//init slideshow counters
counters = [0, 0, 0, 0];

//init slideshow names
//note: slideshow id should be on the img tag

//increment counters
function plusSlide(slideshowNum, imageSet) {
  counters[slideshowNum]++;
  showSlide(slideshowNum, imageSet);
}
function minusSlide(slideshowNum, imageSet) {
  counters[slideshowNum]--;
  showSlide(slideshowNum, imageSet);
}
function chooseSlide(slideshowNum, imageSet, dotNumber) {
  counters[slideshowNum] = dotNumber;
  showSlide(slideshowNum, imageSet);
}

//when n changes, show correct slide
function showSlide(slideshowNum, imageSetName) {
  //get image set
  switch(imageSetName) {
  case "trap":
    imageSet = trap;
    break;
  case "ripL":
    imageSet = improvientation25;
    break;
  case "everybody":
    imageSet = everybody;
    break;
  case "npsL":
    imageSet = npsNowheresville;
    break;
  case "rip":
    imageSet = rip;
    break;
  case "pw":
    imageSet = npsSpacePlay;
    break;
  }

  //get slideshow and counter
  slideshow = document.getElementById("slideshow" + slideshowNum);
  n = counters[slideshowNum];
  //handle wrapping
  if (n >= imageSet.length) {
    n = counters[slideshowNum] = 0;
  }
  if (n < 0) {
    n = counters[slideshowNum] = imageSet.length - 1;
  }
  slideshow.src = imageSet[n];
}
