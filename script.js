const fadeInElements = document.querySelectorAll('#clock-text, #calender-text');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            fadeInObserver.unobserve(entry.target); // animate only once
        }
    });
}, {
    threshold: 0.5
});

fadeInElements.forEach(el => fadeInObserver.observe(el));


document.addEventListener('DOMContentLoaded', function () {
    const floatImages = document.querySelectorAll('.floating-image');

    floatImages.forEach((img, index) => {
        let direction = 1;
        let pos = 0;

        setInterval(() => {
            pos += direction * 0.5;
            img.style.transform = `translateY(${pos}px)`;

            if (pos >= 15 || pos <= -15) {
                direction *= -1;
            }
        }, 30 + index * 10); // slight stagger for each image
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const clockImg = document.querySelector(".clock-img");
    const calendarImg = document.querySelector(".calender-img");
    
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("clock-img")) {
            entry.target.classList.add("fly-in-left");
          } else if (entry.target.classList.contains("calender-img")) {
            entry.target.classList.add("fly-in-right");
          }
          observer.unobserve(entry.target); // Only run once
        }
      });
    }, { threshold: 0.3 });
  
    // Only observe if the element exists
    if (clockImg instanceof Element) observer.observe(clockImg);
    if (calendarImg instanceof Element) observer.observe(calendarImg);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const purpleImg = document.querySelector(".purple-img");

    // Check if purple image exists
    if (purpleImg instanceof Element) {
        // Set the image to start off-screen (to the right)
        purpleImg.style.opacity = 0;
        purpleImg.style.transform = "translateX(100px)"; // off-screen to the right

        // Force reflow to make sure styles are applied before animation
        void purpleImg.offsetWidth;

        // Add the animation class to make the image "fly in" after a slight delay
        setTimeout(() => {
            purpleImg.classList.add("fly-in-right");
        }, 100); // Delay for smoother transition
    }
});
