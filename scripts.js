
  // API from WeatherAPI.com
  const apiKey = '06dbae3d2aa64e99955190534230607';
  const zipCode = '14411';

  // Fetch weather data from the API
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${zipCode}`)
    .then((response) => response.json())
    .then((data) => {
      // Extract the temperature in Fahrenheit from the JSON response
      const temperatureFahrenheit = data.current.temp_f;

      // Display the temperature in the HTML element
      document.getElementById('temperature').textContent = temperatureFahrenheit;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });


    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    
    function updateDotStyles(index) {
      // Remove the 'active-dot' class from all dots
      dots.forEach((dot) => dot.classList.remove('active-dot'));
    
      // Add the 'active-dot' class to the dot corresponding to the current index
      dots[index].classList.add('active-dot');
    }
    
    // Initialize the dot styles for the first slide
    updateDotStyles(currentIndex);
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Remove the 'active-dot' class from all dots
        dots.forEach((dot) => dot.classList.remove('active-dot'));
    
        // Add the 'active-dot' class to the clicked dot
        dot.classList.add('active-dot');
    
        // Move the carousel to the corresponding slide
        slides.forEach((slide, slideIndex) => {
          if (slideIndex === index) {
            slide.style.transform = 'translateX(0%)';
          } else {
            slide.style.transform = `translateX(${100 * (slideIndex - index)}%)`;
          }
        });
    
        // Update the current index
        currentIndex = index;
      });
    });
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
      });
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
      updateDotStyles(currentIndex);
    }
    
    document.querySelector('.prev-button').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
      updateDotStyles(currentIndex);
    });
    
    document.querySelector('.next-button').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
      updateDotStyles(currentIndex);
    });
    