document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navItems = document.querySelector(".nav-items");
    const closeMenu = document.querySelector(".close-menu");
    const navLinks = document.querySelectorAll(".nav-items div a");

    hamburgerMenu.addEventListener("click", function() {
        navItems.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navItems.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        });
    });
});


function SendMail() {
    let parms = {
        subject : document.getElementById("subject").value,
        name : document.getElementById("name").value,
        message : document.getElementById("message").value,
        email : document.getElementById("email").value,
      
    }

emailjs.send("service_0i17y9c", "template_107a34n", parms).then(alert("Email Sent!!") )
} 
