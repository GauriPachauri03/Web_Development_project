
    function sendMail(event) {
        event.lo;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        const params = {
            name: name,
            email: email,
            message: message,
        };

        emailjs.send("service_wsedoeg", "template_qhw2ihs", params)
            .then(() => {
                Customalert();
                document.getElementById("contact-form").reset(); // Clear the form
            })
            .catch((error) => {
                console.error("Email send error:", error);
                alert("There was an error sending your message. Please try again later.");
            });
    }

    // Attach form submit listener
    window.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("contact-form");
        form.addEventListener("submit", sendMail);
    });

