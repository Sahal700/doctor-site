const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  // Hamburger animation
  menuBtn.classList.toggle('active');

  // Mobile menu animation
  mobileMenu.classList.toggle('open');
});

// animate the home page text and image section -----------------------------------------------------------------------------
const tl = gsap.timeline();

// Animate elements from bottom with stagger effect
tl.from(".animate-element", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2
});

// Add a subtle floating animation to the image card overlay
gsap.to(".floating-animation", {
    duration: 3,
    y: -10,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
    delay: 1.5
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

// Scroll-triggered animations for when section comes into view
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-element", {
    scrollTrigger: {
        trigger: "section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.15,
    ease: "power3.out"
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

document.addEventListener('DOMContentLoaded', function() {
  gsap.from("#booking-section .animate-on-scroll", {
      scrollTrigger: {
          trigger: "#booking-section",
          start: "top 85%",
          toggleActions: "play none none none",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
  });
});

