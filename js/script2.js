document.addEventListener('DOMContentLoaded', function() {
    const text = "Hey there! Welcome to my portfolio! ";
    const typewriterElement = document.getElementById("typewriter");
    const emojiElement = document.querySelector(".wave-emoji");
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Change the speed of typing here (100ms)
        } else {
            // Once typing is done, add the waving class to the emoji
            emojiElement.classList.add("waving-emoji");
        }
    }

    type();
});

// document.getElementById('theme-toggle').addEventListener('click', () => {
//     document.body.classList.toggle('light-mode');
//     document.querySelectorAll('nav, .contact-btn, .content-section, .toggleContainer, .text')
//         .forEach(el => el.classList.toggle('light-mode'));
// });





