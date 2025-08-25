// ===== JAVASCRIPT ESPECÍFICO PARA LOGIN =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('Login JS cargado');

    // Configurar validaciones para login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        setupRealTimeValidation(loginForm);
    }

    // Configurar validaciones para registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
        setupRealTimeValidation(registerForm);
    }
});

// ===== VALIDACIÓN EN TIEMPO REAL =====
function setupRealTimeValidation(form) {
    const inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
        // Validar al escribir
        input.addEventListener('input', () => validateField(input));
        // Validar al perder el foco
        input.addEventListener('blur', () => validateField(input));
        // Validar al obtener el foco
        input.addEventListener('focus', () => clearFieldError(input));
    });
}

function validateField(input) {
    const fieldName = input.name;
    const value = input.value.trim();
    
    // Limpiar errores previos
    clearFieldError(input);
    
    // Validaciones específicas por campo
    switch(fieldName) {
        case 'username':
            if (value.length < 3) {
                showFieldError(input, 'El usuario debe tener al menos 3 caracteres');
                return false;
            }
            if (value.length > 50) {
                showFieldError(input, 'El usuario no puede tener más de 50 caracteres');
                return false;
            }
            // Validar formato (solo letras, números y guiones bajos)
            if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                showFieldError(input, 'El usuario solo puede contener letras, números y guiones bajos');
                return false;
            }
            break;
            
        case 'email':
            if (value && !isValidEmail(value)) {
                showFieldError(input, 'Ingresa un email válido');
                return false;
            }
            break;
            
        case 'password':
            if (value.length < 6) {
                showFieldError(input, 'La contraseña debe tener al menos 6 caracteres');
                return false;
            }
            break;
            
        case 'confirm_password':
            const password = document.getElementById('password').value;
            if (value !== password) {
                showFieldError(input, 'Las contraseñas no coinciden');
                return false;
            }
            break;
            
        case 'telefono':
            if (value && !isValidPhone(value)) {
                showFieldError(input, 'Ingresa un teléfono válido');
                return false;
            }
            break;
            
        case 'edad':
            if (value && (isNaN(value) || value < 1 || value > 120)) {
                showFieldError(input, 'La edad debe ser un número entre 1 y 120');
                return false;
            }
            break;
    }
    
    return true;
}

// ===== FUNCIONES DE VALIDACIÓN =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Permite +, números, espacios, guiones y paréntesis
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,15}$/;
    return phoneRegex.test(phone);
}

// ===== MANEJO DE ERRORES =====
function showFieldError(input, message) {
    // Crear elemento de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #dc3545;
        font-size: 12px;
        margin-top: 5px;
        display: block;
    `;
    
    // Insertar después del input
    input.parentNode.appendChild(errorDiv);
    
    // Agregar clase de error al input
    input.classList.add('error-input');
}

function clearFieldError(input) {
    // Remover mensaje de error
    const errorDiv = input.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    
    // Remover clase de error
    input.classList.remove('error-input');
}

// ===== MANEJADORES DE FORMULARIOS =====
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validar todos los campos
    const inputs = e.target.querySelectorAll('input');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (isValid) {
        console.log('Login válido, enviando formulario...');
        e.target.submit();
    }
}

function handleRegister(e) {
    e.preventDefault();
    
    // Validar todos los campos
    const inputs = e.target.querySelectorAll('input');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (isValid) {
        console.log('Registro válido, enviando formulario...');
        e.target.submit();
    }
}
