interface CustomFormData {
    name: string;
    email: string;
    num: string;
    password: string;
}

function clearErrorMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function displayErrorMessage(inputId: string, message: string) {
    const errorElement = document.getElementById(`${inputId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateContactNumber(num: string): boolean {
    const contactRegex = /^[0-9]{10}$/;
    return contactRegex.test(num);
}

function validateForm(formData: CustomFormData): boolean {
    clearErrorMessages();

    let isValid = true;

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

document.querySelector('form')!.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData: CustomFormData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        num: (document.getElementById('num') as HTMLInputElement).value,
        password: (document.getElementById('pass') as HTMLInputElement).value,
    };

    if(validateForm(formData)) {
        console.log('Form submitted successfully!', formData);
        alert('Registration successful!');
    }else {
        console.error('Form validation failed');
    }
});
