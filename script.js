const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  // Hamburger animation
  menuBtn.classList.toggle('active');

  // Mobile menu animation
  mobileMenu.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', function() {
    // animate the home page text and image section -----------------------------------------------------------------------------
    const tl = gsap.timeline();

    // Animate elements from bottom with stagger effect
    tl.to(".animate-element", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        stagger: 0.2
    });

    // Add a subtle floating animation to the image card overlay
    gsap.timeline({ repeat: -1 })
        .to(".floating-animation", {
            duration: 2,
            y: -10,
            ease: "sine.out"
        })
        .to(".floating-animation", {
            duration: 2.5,
            y: 0,
            ease: "sine.in"
        });

    // Hover animations for interactive elements
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {duration: 0.3, scale: 1.05, ease: "power2.out"});
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {duration: 0.3, scale: 1, ease: "power2.out"});
        });
    });
});

// gsap.registerPlugin(ScrollTrigger);

gsap.to(".fade-in", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
                trigger: ".fade-in",
                start: "top 85%",
            }
});

gsap.to(".slide-left", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".slide-left",
        start: "top 85%",
    }
});

gsap.to(".scale-up", {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: ".scale-up",
        start: "top 80%"
    }
});

// in about us tick marks
gsap.to(".stagger-item", {
    opacity: 1,
    x: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".stagger-item",
    }
});

// in our service
let serviceTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".timeline-section",
        start: "top 85%"
    }
});

serviceTl.to(".timeline-1", { opacity: 1, scale: 1, duration: 1, ease: "power3.out"  })
    .to(".timeline-2", { opacity: 1, scale: 1, duration: 1, ease: "power3.out"  }, "-=0.6")
    .to(".timeline-3", { opacity: 1, scale: 1, duration: 1, ease: "power3.out"  }, "-=0.6");


gsap.set(".tile-group", { opacity: 0, scale: 0.8, y: 50 });

gsap.to(".tile-group", {
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".tile-parent",   // your parent div
    start: "top 70%"
  }
});

// ---------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form and the new notification element
    const bookingForm = document.getElementById('booking-form');
    const successNotification = document.getElementById('success-notification');
  
    // Listen for the form's 'submit' event
    bookingForm.addEventListener('submit', function(event) {
      // Prevent the page from reloading
      event.preventDefault();
  
      // --- Show the notification ---
      // We just remove the 'hidden' class to make it appear instantly
      successNotification.classList.remove('hidden');
  
      // --- Hide the notification after 5 seconds ---
      setTimeout(() => {
        // Add the 'hidden' class back to make it disappear
        successNotification.classList.add('hidden');
      }, 5000); // 5000 milliseconds = 5 seconds
  
      // Reset the form fields
      bookingForm.reset();
    });
});

