
// Typed.js ka use karke typing effect banaya hai


var typed =new Typed(".text",{
    strings:["Frontend Developer...!","Backend developer...!","web developer...!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
});
// Contact form submission ke liye JavaScript code
// Formspree ka use karke form data bhejne ke liye
// Yeh code form submit hone par page refresh nahi hone dega aur AJAX request bhejega

    const contactForm = document.getElementById('contact-form');
    

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Page refresh nahi hone dega

        const formData = new FormData(this);
        const response = await fetch('https://formspree.io/f/xykkewel', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Shukriya ! Aapka message mil gaya hai.');
            contactForm.reset(); // Form khali kar dega
        } else {
            alert('Oops! Kuch galti ho gayi. Check karo ki ID sahi hai ya nahi.');
        }
    });
