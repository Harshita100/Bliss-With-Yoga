document.addEventListener("DOMContentLoaded", function() {
    const rotation = document.getElementById("rotation");
  
    let rotating = 0;
  
    function rotateImage() {
      rotating += 5; 
      rotation.style.transform = `rotate(${rotating}deg)`;
      requestAnimationFrame(rotateImage);
    }
    rotateImage();
  });
  