/*// Get the toggle button and body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem('lightmode') === 'enabled') {
  body.classList.add('lightmode');
  themeToggle.checked = true; // Keep the toggle in the "on" position
}

// Toggle dark mode when the checkbox is clicked
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'enabled'); // Save dark mode preference
  } else {
    body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'disabled'); // Save light mode preference
  }
});*/


const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.style.backgroundColor = '#FFFFFF';  // White background
      body.style.color = '#000000';            // Black text
    } else {
      body.style.backgroundColor = '';        // Reset to default background
      body.style.color = '';                  // Reset to default text color
    }
  });