const pages = document.querySelectorAll('.landing-page1, .landing-page2, .landing-page3, .landing-page4');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let currentIndex = 0;

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
            page.style.display = 'none';
        }
    });
    pages[index].style.display = 'flex';
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % pages.length;
    showPage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + pages.length) % pages.length;
    showPage(currentIndex);
});

// Show first page on load
showPage(currentIndex);
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

const customerSlider = document.getElementById("customerSlider");
    const nextCustomerBtn = document.getElementById("nextCustomerBtn");
    const prevCustomerBtn = document.getElementById("prevCustomerBtn");

    nextCustomerBtn.addEventListener("click", () => {
        customerSlider.scrollBy({
            left: 270,
            behavior: 'smooth'
        });
    });

    prevCustomerBtn.addEventListener("click", () => {
        customerSlider.scrollBy({
            left: -270,
            behavior: 'smooth'
        });
    });

    
        // Customer slider already exists above

        const staffSlider = document.getElementById("staffSlider");
        const nextStaffBtn = document.getElementById("nextStaffBtn");
        const prevStaffBtn = document.getElementById("prevStaffBtn");

        nextStaffBtn.addEventListener("click", () => {
            staffSlider.scrollBy({
                left: 270,
                behavior: 'smooth'
            });
        });

        prevStaffBtn.addEventListener("click", () => {
            staffSlider.scrollBy({
                left: -270,
                behavior: 'smooth'
            });
        });
      // Show/hide back-to-top button on scroll
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
        } else {
        backToTopButton.style.display = "none";
        }
    });

    // Scroll to top on click
    backToTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // Set current year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Get current page filename
  const currentPage = window.location.pathname.split("/").pop();

  // Select all nav links
  document.querySelectorAll(".navbar ul li a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (linkPage === "#" && currentPage === "")) {
      link.classList.add("Active_Nav");
    } else {
      link.classList.remove("Active_Nav");
    }
  });


    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                // Adjust this for speed
                const increment = target / 100;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target + (target === 5 || target === 10 ? '+' : '+');
                }
            };

            updateCount();
        });
    });

/*
document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('toggle');
    const burger = document.getElementById('burger');
    
    // Close menu when clicking anywhere on the document
    document.addEventListener('click', function(event) {
        // Check if the click is outside the navbar and burger menu
        if (!event.target.closest('.navbar') && !event.target.closest('.burger')) {
            toggleCheckbox.checked = false;
        }
    });
    
    // Prevent clicks inside the navbar from closing it
    document.querySelector('.navbar').addEventListener('click', function(event) {
        event.stopPropagation();
    });
});*/
