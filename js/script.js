// Get references to the toggle checkbox and content sections
const toggleCheckbox = document.getElementById('toggle');
const workSection = document.getElementById('work-section');
const educationSection = document.getElementById('education-section');

// Function to update the displayed content
function updateContent() {
  if (toggleCheckbox.checked) {
    // Show work section, hide education section
    workSection.classList.add('active');
    educationSection.classList.remove('active');
  } else {
    // Show education section, hide work section
    workSection.classList.remove('active');
    educationSection.classList.add('active');
  }
}

// Listen for changes on the toggle checkbox
toggleCheckbox.addEventListener('change', updateContent);

updateContent();










