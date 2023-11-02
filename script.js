const form = document.getElementById('vvForm')

form.addEventListener('submit' , function (event) {
    
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    let isValid = true

    if (nameInput.value.trim() ==='') {
        isValid = false;
        alert('Name is required');
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        alert('Email is required');
    } else if (!isValidEmail(emailInput.value)) {
        isValid = false;
        alert('Please enter valid email');
    }

    if (isValid) {
        form.submit();
    }
});

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}