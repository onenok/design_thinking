// Page section display control
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show target section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

// Login form handler
document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showSection('metrics');
});

// Body metrics form handler
document.getElementById('metrics-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showSection('features');
    document.getElementById('rewards-section').classList.remove('hidden');
});

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    // Only show login section
    showSection('auth');
}); 