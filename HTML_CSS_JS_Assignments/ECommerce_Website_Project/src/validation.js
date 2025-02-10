function clearErrorMessages() {
    var errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function (element) {
        element.textContent = '';
    });
}
function displayErrorMessage(inputId, message) {
    var errorElement = document.getElementById("".concat(inputId, "-error"));
    if (errorElement) {
        errorElement.textContent = message;
    }
}
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateContactNumber(num) {
    var contactRegex = /^[0-9]{10}$/;
    return contactRegex.test(num);
}
function validateForm(formData) {
    clearErrorMessages();
    var isValid = true;
    if (formData.name.length < 3) {
        displayErrorMessage('name', 'Username must be at least 3 characters long.');
        isValid = false;
    }
    if (formData.password.length < 6) {
        displayErrorMessage('pass', 'Password must be at least 6 characters long.');
        isValid = false;
    }
    if (!validateEmail(formData.email)) {
        displayErrorMessage('email', 'Please enter a valid email address.');
        isValid = false;
    }
    if (!validateContactNumber(formData.num)) {
        displayErrorMessage('num', 'Please enter a valid 10-digit contact number.');
        isValid = false;
    }
    return isValid;
}
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        num: document.getElementById('num').value,
        password: document.getElementById('pass').value,
    };
    if (validateForm(formData)) {
        console.log('Form submitted successfully!', formData);
        alert('Registration successful!');
    }
    else {
        console.error('Form validation failed');
    }
});
