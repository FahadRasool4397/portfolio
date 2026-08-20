document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");
            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });

document.getElementById("contactForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;
            const body =
        `Hello Fahad,
        Name: ${name}
        Email: ${email}
        ${message}
        Regards,
        ${name}`;
            const mailto =
                `mailto:fahadrasool0069@gmail.com` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;
            window.location.href = mailto;
        })


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);
    let count = 0;

    const duration = 600;
    const increment = target / (duration / 30);

    const updateCounter = () => {

        count += increment;

        if (count < target) {
            counter.textContent = Math.ceil(count).toString().padStart(2, "0") + "+";
            setTimeout(updateCounter, 30);
        } else {
            counter.textContent = target.toString().padStart(2, "0") + "+";
        }
    };

    updateCounter();
});

document.addEventListener("DOMContentLoaded", function () {
            const floating = document.querySelector(".floating-socials");
            window.addEventListener("scroll", function () {
                if (window.scrollY > 4250) {
                    floating.classList.add("scrolled");
                } else {
                    floating.classList.remove("scrolled");
                }
            });
        });
