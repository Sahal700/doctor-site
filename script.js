const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll("#mobile-menu .menu-item");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close menu immediately
    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("open");

    // Force reset positioning after animation completes
    setTimeout(() => {
      // Reset any accumulated transforms
      menuLinks.forEach((item) => {
        item.style.transform = "";
        item.style.left = "0";
      });
    }, 400);
  });
});

function mobileScrollToId(event, id) {

  // Prevent default anchor jump
  if (event) event.preventDefault();

  const el = document.getElementById(id);
  if (!el) return;

  const offset = 280;
  const target = el.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });

}

document.addEventListener("DOMContentLoaded", function () {
  // animate the home page text and image section -----------------------------------------------------------------------------
  const tl = gsap.timeline();

  // Animate elements from bottom with stagger effect
  tl.to(".animate-element", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
    stagger: 0.2,
  }).to(
    ".animate-hero-image",
    {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power3.out",
    },
    0.3
  );

  // Add a subtle floating animation to the image card overlay
  gsap
    .timeline({ repeat: -1 })
    .to(".floating-animation", {
      duration: 2,
      y: -10,
      ease: "sine.out",
    })
    .to(".floating-animation", {
      duration: 2.5,
      y: 0,
      ease: "sine.in",
    });

  gsap
    .timeline({ repeat: -1 })
    .to(".floating-animation-1", {
      duration: 2,
      y: 10,
      ease: "sine.out",
    })
    .to(".floating-animation-1", {
      duration: 2.5,
      y: 0,
      ease: "sine.in",
    });

  // Hover animations for interactive elements
  document.querySelectorAll(".a-anime, .button-anime").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, { duration: 0.3, scale: 1.05, ease: "power2.out" });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, { duration: 0.3, scale: 1, ease: "power2.out" });
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".fade-in", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top 80%",
  },
});

gsap.to(".slide-left", {
  opacity: 1,
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".slide-left",
    start: "top 85%",
  },
});

gsap.to(".scale-up", {
  opacity: 1,
  scale: 1,
  duration: 1.2,
  ease: "back.out(1.5)",
  scrollTrigger: {
    trigger: ".scale-up",
    start: "top 80%",
  },
});

// in about us tick marks
gsap.to(".stagger-item", {
  opacity: 1,
  x: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".stagger-item",
  },
});

// in our service
let serviceTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".timeline-section",
    start: "top 85%",
  },
});

serviceTl
  .to(".timeline-1", { opacity: 1, scale: 1, duration: 1, ease: "power3.out" })
  .to(
    ".timeline-2",
    { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
    "-=0.6"
  )
  .to(
    ".timeline-3",
    { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
    "-=0.6"
  );

gsap.set(".tile-group", { opacity: 0, scale: 0.8, y: 50 });

gsap.to(".tile-group", {
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".tile-parent", // your parent div
    start: "top 70%",
  },
});

// in op setion
let opTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".timeline-section-1",
    start: "top 85%",
  },
});

opTl
  .to(".timeline-1-1", {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out",
  })
  .to(
    ".timeline-1-2",
    { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
    "-=0.6"
  );

gsap.set(".tile-group-op", { opacity: 0, scale: 0.8, y: 50 });

gsap.to(".tile-group-op", {
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 0.8,
  ease: "back.out(1.7)",
  stagger: 0.15, // stagger between children
  scrollTrigger: {
    trigger: ".tile-parent-op", // parent triggers the whole stagger
    start: "top 70%",
  },
});


// ---------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const BUSINESS_WHATSAPP_NUMBER = "+918826752502";
  // Get references to the form and the new notification element
  const bookingForm = document.getElementById("booking-form");
  const successNotification = document.getElementById("success-notification");

  // Listen for the form's 'submit' event
  bookingForm.addEventListener("submit", function (event) {
    // Prevent the page from reloading
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get("name").trim();

    if (!name) {
      alert("Please fill in all fields");
      return;
    }

    const message = `Hi! I would like to book a session.
                
Name: ${name}
                
Please confirm my booking. Thank you!`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    // --- Show the notification ---
    // We just remove the 'hidden' class to make it appear instantly
    successNotification.classList.remove("hidden");

    // --- Hide the notification after 5 seconds ---
    setTimeout(() => {
      // Add the 'hidden' class back to make it disappear
      successNotification.classList.add("hidden");
    }, 5000); // 5000 milliseconds = 5 seconds

    // Reset the form fields
    bookingForm.reset();
  });
});

// Mobile-only "more..." toggle for PMS description
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("pms-more-toggle");
  const content = document.getElementById("pms-more-content");
  if (!toggle || !content) return;

  const setLabel = () => {
    const expanded = content.classList.contains("expanded");
    toggle.textContent = expanded ? "less..." : "more...";
  };

  const ensureDesktopOpen = () => {
    if (window.matchMedia("(min-width: 640px)").matches) {
      content.classList.add("expanded");
    }
    setLabel();
  };

  toggle.addEventListener("click", () => {
    content.classList.toggle("expanded");
    setLabel();
  });

  ensureDesktopOpen();
  window.addEventListener("resize", ensureDesktopOpen);
});

// Delay loading the portrait video until the entire page has finished loading
window.addEventListener("load", () => {
  const video = document.getElementById("mental-health-video");
  if (!video) return;

  const skeleton = document.getElementById("video-skeleton");
  const chipBtn = document.getElementById("video-play-chip");
  const sourceEl = video.querySelector("source");
  const src = sourceEl?.dataset.src || video.dataset.src;

  if (!src) return;

  const setChipLabel = (text) => {
    if (chipBtn) chipBtn.textContent = text;
  };

  const togglePlayPause = () => {
    if (!video.paused && !video.ended) {
      video.pause();
      return;
    }
    video.play().catch(() => {
      setChipLabel("Tap to play");
    });
  };

  const revealVideo = () => {
    video.classList.remove("opacity-0");
    skeleton?.classList.add("hidden");
  };

  const handleError = () => {
    skeleton?.classList.add("hidden");
  };

  if (video.readyState >= 2) {
    revealVideo();
  } else {
    video.addEventListener("loadeddata", revealVideo, { once: true });
    video.addEventListener("canplaythrough", revealVideo, { once: true });
    video.addEventListener("error", handleError, { once: true });
    setTimeout(revealVideo, 8000); // fallback to clear skeleton
  }

  if (sourceEl) {
    sourceEl.src = src;
  } else {
    video.src = src;
  }

  video.load();

  // Tap/click to toggle play/pause
  chipBtn?.addEventListener("click", togglePlayPause);

  video.addEventListener("play", () => setChipLabel("Pause"));

  video.addEventListener("pause", () => setChipLabel("Tap to play"));

  video.addEventListener("ended", () => setChipLabel("Tap to play"));
});

function openLocation(link) {
  window.open(link, "_blank");
}
