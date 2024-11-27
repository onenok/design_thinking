// comment language: en
// Page section display control

// ---------init---------

// Add a history record array
let sectionHistory = [['auth']];

// ---------function---------
function showSection(...sectionNames) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show target sections
    sectionNames.forEach(sectionName => {
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    });
    // Add new section to history
    sectionHistory.push(sectionNames);
    console.log(sectionNames);
    console.log(sectionHistory);
}

// Handle register form submission
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showSection('not-implemented');
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showSection('not-implemented');
});



// Body metrics form handler
document.getElementById('metrics-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showSection('features', 'rewards');
});

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    // Only show login section
    showSection('auth');
});

// Toggle login/register form
function toggleAuth(type) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (type === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
}

// Add a function to go back to the previous section
function goBack() {
    // Remove current section
    sectionHistory.pop();
    // Get previous section
    const previousSection = sectionHistory[sectionHistory.length - 1];
    
    showSection(...previousSection);
    sectionHistory.pop();
}

// Password validation function
document.addEventListener('DOMContentLoaded', function() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const matchMessage = document.getElementById('password-match-message');
    const requirements = {
        length: document.getElementById('length'),
        lowercase: document.getElementById('lowercase'),
        uppercase: document.getElementById('uppercase'),
        number: document.getElementById('number'),
        special: document.getElementById('special')
    };

    // Check password strength
    function checkPassword(password) {
        const criteria = {
            length: password.length >= 8,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /\d/.test(password),
            special: /[!@#$%^&*]/.test(password)
        };

        // Update the visual display of the requirements list
        for (let requirement in criteria) {
            if (criteria[requirement]) {
                requirements[requirement].classList.add('valid');
            } else {
                requirements[requirement].classList.remove('valid');
            }
        }

        return Object.values(criteria).every(Boolean);
    }

    // Password input event listener
    password.addEventListener('input', function() {
        console.log('password input');
        checkPassword(this.value);
        console.log(this.value);
        console.log(password.value);
        if (this.value === password.value) {
            matchMessage.textContent = 'Passwords match';
            matchMessage.className = 'validation-message success';
        } else {
            matchMessage.textContent = 'Passwords do not match';
            matchMessage.className = 'validation-message error';
        }
    });

    // Confirm password match
    confirmPassword.addEventListener('input', function() {
        console.log(this.value);
        console.log(password.value);
        if (this.value === password.value) {
            matchMessage.textContent = 'Passwords match';
            matchMessage.className = 'validation-message success';
        } else {
            matchMessage.textContent = 'Passwords do not match';
            matchMessage.className = 'validation-message error';
        }
    });

    // Modify register form submission processing
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const passwordValue = password.value;
        const confirmValue = confirmPassword.value;

        if (!checkPassword(passwordValue)) {
            alert('Please ensure that the password meets all requirements');
            return;
        }

        if (passwordValue !== confirmValue) {
            alert('Passwords do not match');
            return;
        }

        // If all validations pass
        showSection('not-implemented');
    });
}); 

// Toggle password visibility
function togglePasswordVisibility(inputId, button) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '👁';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
} 