function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').innerText = dateTimeString;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});


const video = document.getElementById('v');
const button = document.getElementById('b1');
        
        // Add an event listener to the button
button.addEventListener('click', () => {
            // Play the video when the button is clicked
    video.play();
});

const vide = document.getElementById('v');
const butto = document.getElementById('b2');
        
        // Add an event listener to the button
butto.addEventListener('click', () => {
            // Play the video when the button is clicked
    vide.pause();
});

let currentIndex = 0;
        const slidesContainer = document.querySelector('#slides');
        const slideWidth = document.querySelector('.slide').offsetWidth;
        const visibleSlides = 4;
        const totalSlides = document.querySelectorAll('.slide').length;

        function updateSlider() {
            const maxIndex = totalSlides - visibleSlides;
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            } else if (currentIndex < 0) {
                currentIndex = 0;
            }
            slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        }

        function moveSlide(step) {
            currentIndex += step;
            updateSlider();
        }

        updateSlider();


        document.querySelectorAll('.grid-item').forEach(item => {
            item.addEventListener('click', () => {
              alert('You clicked on ' + item.querySelector('p').textContent);
            });
          });
          

