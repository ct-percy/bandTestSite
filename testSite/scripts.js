// JavaScript to make the text overlay fade in on page load
window.addEventListener('load', function() {
    const textOverlay = document.querySelector('.text-overlay');
    
    // Trigger the fade-in effect by setting opacity to 1
    setTimeout(function() {
      textOverlay.style.opacity = 0.5; // This will trigger the CSS transition
    }, 900); // Delay to ensure CSS transition starts after the page load
  });
  


  //////////////////////////////Music script


/////////////////////////////EVENTS 

let currentIndex = 0;
const slides = document.querySelectorAll('.events-carousel-slide');
const totalSlides = slides.length;

const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    document.querySelector('.events-carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Initial setup
showSlide(currentIndex);



document.addEventListener("DOMContentLoaded", function() {
  // Get the "Who We Are" link, "Music" link, and their respective containers
  const whoWeAreLink = document.getElementById("whoWeAreLink");
  const musicLink = document.getElementById("musicLink");
  const container = document.querySelector(".container");
  const musicContainer = document.querySelector(".musicContainer");

  // Initially hide both containers
  container.style.opacity = 0;
  container.style.display = "none"; // Hide the container initially
  musicContainer.style.opacity = 0;
  musicContainer.style.display = "none"; // Hide the music container initially

  // Function to toggle the visibility of a container with fade effect
  function toggleContainer(container) {
    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "flex"; // Show the container
      setTimeout(() => {
        container.style.opacity = 1; // Fade-in effect
      }, 10); // Small delay for the transition to take effect
    } else {
      container.style.opacity = 0; // Fade-out effect
      setTimeout(() => {
        container.style.display = "none"; // Hide the container after fade
      }, 500); // Time should match the fade-out duration (500ms here)
    }
  }

  // Add click event listener to the "Who We Are" link
  whoWeAreLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    toggleContainer(container);
  });

  // Add click event listener to the "Music" link
  musicLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    toggleContainer(musicContainer);
  });

  // Add a click event listener on the document to hide both containers when clicking anywhere else
  document.addEventListener("click", function(event) {
    // If the clicked target is not the whoWeAreLink, musicLink, or their respective containers, hide them
    if (!whoWeAreLink.contains(event.target) && !container.contains(event.target) && 
        !musicLink.contains(event.target) && !musicContainer.contains(event.target)) {
      // Hide both containers if clicked outside
      container.style.opacity = 0;
      setTimeout(() => {
        container.style.display = "none";
      }, 500);
      
      musicContainer.style.opacity = 0;
      setTimeout(() => {
        musicContainer.style.display = "none";
      }, 500);
    }
  });
});










document.addEventListener("DOMContentLoaded", function() {
  // Get the "Vero Soul" link element
  const veroSoulLink = document.getElementById("reload");

  // Add click event listener to the "Vero Soul" link
  veroSoulLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent any default action (if it's a link)

      // Reload the page
      location.reload(); // This reloads the page
  });
});












 // Select the events link and the events carousel container
 const eventsLink = document.getElementById('eventsLink');
 const eventsCarouselContainer = document.querySelector('.events-carousel-container');

 // Add an event listener to the "Events" link
 eventsLink.addEventListener('click', function (event) {
   event.preventDefault();  // Prevent default link behavior (no page reload)

   // Toggle the 'show' class for the events carousel container
   if (eventsCarouselContainer.classList.contains('show')) {
     // Hide the events carousel container
     eventsCarouselContainer.classList.remove('show');
     
     // Wait for the animation to finish before setting display to none
     setTimeout(function() {
       eventsCarouselContainer.style.display = 'none';
     }, 500);  // Matches the transition duration (0.5s)
   } else {
     // Show the events carousel container
     eventsCarouselContainer.style.display = 'flex';
     
     // Add the 'show' class to trigger the fade-in and slide-in transition
     setTimeout(function() {
       eventsCarouselContainer.classList.add('show');
     }, 10);  // Small delay to ensure the display is set before transition
   }
 });











 // Select the Contact link and the contact container
 const contactLink = document.getElementById('contactLink');  // Assuming the Contact link has the ID "contactLink"
 const contactContainer = document.querySelector('.contactContainer');  // The contactContainer div

 // Add an event listener to the "Contact" link
 contactLink.addEventListener('click', function (event) {
   event.preventDefault();  // Prevent default link behavior (no page reload)

   // Toggle the 'show' class for the contact container
   if (contactContainer.classList.contains('show')) {
     // Hide the contact container
     contactContainer.classList.remove('show');
     
     // Set display to none after the transition ends (0.5s)
     setTimeout(function() {
       contactContainer.style.display = 'none';
     }, 500);
   } else {
     // Show the contact container
     contactContainer.style.display = 'flex';
     
     // Add the 'show' class to trigger the fade-in and slide-in transition
     setTimeout(function() {
       contactContainer.classList.add('show');
     }, 10);  // Small delay to ensure display is set before transition
   }
 });