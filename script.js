const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image links here
  ];
  
  let currentIndex = 0;
  const imgElement = document.getElementById("gallery-img");
  
  function showImage(index) {
    imgElement.src = images[index];
  }
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
  
  // Show the first image initially
  showImage(currentIndex);
  