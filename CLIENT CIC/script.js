// This javascript code does the nextSlide function every 4000ms
// which takes the .show class, a class that has the opacity: 1 property
// and gives it to the next image in sequence, thereby creating a fading
// background change that rotates through the photos with the .slideshow class
let backgrounds = document.querySelectorAll(".slideshow");
let image = 0;

function nextSlide(){
    backgrounds[image].classList.remove("show");

    image++;

    if (image >= backgrounds.length){
        image=0;
    }

    backgrounds[image].classList.add("show");
}

setInterval(nextSlide, 4000);


//This javascript code will make enlarge the picture when clicked on the gallery,
//dim the background and create and X button which will close it.
    document.querySelectorAll('.gallery img').forEach(photo =>{
    photo.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
         document.querySelector('.popup-img img').src = photo.getAttribute('src');
    }
});

    document.querySelector('.popup-img span').onclick = () => {
        document.querySelector('.popup-img').style.display = 'none';
    }