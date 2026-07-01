// MENU TOGGLE FUNCTION
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.classList.contains("responsive")){
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}

// DOWNLOAD CV FUNCTION
function downloadCV() {
    // Create a link element
    const link = document.createElement('a');
    link.href = 'riyascv.pdf'; // Make sure resume.pdf is in your portfolio folder
    link.download = 'Mohammed_Riyas_riyascv.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', function() {

// ADD SHADOW ON SCROLLBAR 
window.onscroll = function() {
    headerShadow();
};

function headerShadow(){
    const navHeader = document.getElementById("header");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// TYPE SCRIPT //
var typingEffect = new Typed(".typedtext",{
    strings : ["Designer", "Developer"],
    loop : true,
    typeSpeed : 150,
    backSpeed : 150,
    backDelay : 2000
});

// SCROLL REVEAL //
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', {delay: 100});
sr.reveal('.featured-text-info', {delay: 200});
sr.reveal('.featured-text-btn', {delay: 200});
sr.reveal('.social-icons', {delay: 200});
sr.reveal('.featured-image', {delay: 300});


// PROJECT BOX //
sr.reveal('.project-box',{interval: 200})


// HEADING //

sr.reveal('.top-header',{})


// ABOUT INFO //
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.featured-text-card', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

// INITIALIZE EMAILJS //
emailjs.init("4fcKKVz-qBdWIZ1qJ"); // EmailJS Public Key

// CONTACT FORM SUBMISSION //
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const senderName = document.getElementById('senderName').value.trim();
        const senderEmail = document.getElementById('senderEmail').value.trim();
        const senderMessage = document.getElementById('senderMessage').value.trim();

        // Validate form
        if(senderName === '' || senderEmail === '' || senderMessage === '') {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(senderEmail)) {
            alert('Please enter a valid email');
            return;
        }

        // Disable submit button to prevent multiple submissions
        const sendBtn = document.getElementById('sendBtn');
        sendBtn.disabled = true;
        sendBtn.textContent = 'Sending...';

        // Send email using EmailJS
        emailjs.send('service_chac9ff', 'template_portfolio', {
            to_email: 'mohammedriyas0512@gmail.com',
            sender_name: senderName,
            sender_email: senderEmail,
            message: senderMessage
        }).then(function(response) {
            console.log("Email sent successfully!", response);
            alert('Thank you for your message! I will get back to you soon.');
            
            // Clear form
            document.getElementById('senderName').value = '';
            document.getElementById('senderEmail').value = '';
            document.getElementById('senderMessage').value = '';
            
            // Reset button
            sendBtn.disabled = false;
            sendBtn.textContent = 'Send';
        }).catch(function(error) {
            console.log("Error sending email:", error);
            alert('Failed to send message. Please try again.');
            
            // Reset button
            sendBtn.disabled = false;
            sendBtn.textContent = 'Send';
        });
    });
}

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});
// CHANGE ACTIVE SKILL //

});