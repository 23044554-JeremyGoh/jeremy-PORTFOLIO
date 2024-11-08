document.addEventListener('DOMContentLoaded', function () {
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


 // Preloader script
 const greetings = [
    "Hello",
    "你好",
    "Selemat Datang",
    "안녕하세요",
    "Ciao",
    "Olá",
];

const preloader = document.querySelector('.preloader');
const preloaderText = document.querySelector('.preloader-text');
let currentIndex = 0;

function showNextGreeting() {
    preloaderText.classList.remove('fade-in');
    preloaderText.classList.add('fade-out');
    
    setTimeout(() => {
        preloaderText.textContent = greetings[currentIndex];
        preloaderText.classList.remove('fade-out');
        preloaderText.classList.add('fade-in');
        
        currentIndex = (currentIndex + 1) % greetings.length;
        
        if (currentIndex < greetings.length - 1) {
            setTimeout(showNextGreeting, 1000);
        } else {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        }
    }, 500);
}

window.addEventListener('load', showNextGreeting);





