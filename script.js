// Mobile Navbar

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;
    }


    alert(
        "Thank you " +
        name +
        "! Your message has been submitted."
    );


    contactForm.reset();

});