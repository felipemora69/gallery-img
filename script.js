const arrImages = ["image1.avif", "image2.avif", "image3.avif",];

let currentImage = 0;
 
document.getElementById('prev').addEventListener("click", changeImage);
document.getElementById('next').addEventListener("click", changeImage);
window.addEventListener("load", function() {
    changeImage(0);
});
 
    function changeImage(offset) {
        currentImage = (currentImage + offset + arrImages.length) % arrImages.length;
        var imageShowing = arrImages[currentImage];
        document.getElementById('image').src = 'Images/' + imageShowing;
    }
 
function changeImage() {
    var button = this.id;
    if (button === 'next') {
        currentImage = (currentImage + 1) % arrImages.length;
    } else if (button === 'prev') {
        currentImage = (currentImage - 1 + arrImages.length) % arrImages.length;
    }
 
    var imageShowing = arrImages[currentImage];
    document.getElementById('image').src = 'Images/' + imageShowing;
}