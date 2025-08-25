// ===== JAVASCRIPT PRINCIPAL DEL SITIO =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('Main JS cargado');
    
    // ===== FUNCIONALIDAD DEL SIDEBAR =====
    initializeSidebar();
    
    // ===== FUNCIONALIDADES GLOBALES =====
    initializeGlobalFeatures();
    
    // ===== ANIMACIONES =====
    initializeAnimations();
});

// ===== FUNCIONES DEL SIDEBAR =====
function initializeSidebar() {
    console.log('Inicializando sidebar...');
    
    // Elementos del DOM
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const mainContent = document.getElementById('mainContent');
    
    if (!sidebar || !sidebarToggle) {
        console.log('Elementos del sidebar no encontrados');
        return;
    }
    
    // Estado del sidebar
    let isSidebarOpen = false;
    
    // Función para abrir sidebar
    function openSidebar() {
        sidebar.classList.add('open');
        sidebarToggle.classList.add('active');
        sidebarToggle.classList.add('sidebar-open');
        sidebarOverlay.classList.add('active');
        isSidebarOpen = true;
        
        // Cambiar icono
        sidebarToggle.querySelector('.icon').textContent = '✕';
        
        // Agregar clase al body para prevenir scroll
        document.body.style.overflow = 'hidden';
        
        console.log('Sidebar abierto');
    }
    
    // Función para cerrar sidebar
    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarToggle.classList.remove('active');
        sidebarToggle.classList.remove('sidebar-open');
        sidebarOverlay.classList.remove('active');
        isSidebarOpen = false;
        
        // Cambiar icono
        sidebarToggle.querySelector('.icon').textContent = '☰';
        
        // Restaurar scroll del body
        
        console.log('Sidebar cerrado');
    }
    
    // Función para alternar sidebar
    function toggleSidebar() {
        if (isSidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
    
    // Event listeners
    sidebarToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleSidebar();
    });
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Cerrar sidebar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isSidebarOpen) {
            closeSidebar();
        }
    });
    
    // Cerrar sidebar al hacer clic en enlaces del sidebar
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Solo cerrar si no es un enlace externo o de la misma página
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                // Pequeño delay para que se vea la transición
                setTimeout(() => {
                    closeSidebar();
                }, 100);
            }
        });
    });
    
    // Marcar enlace activo según la página actual
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = sidebar.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Comparar la ruta actual con el href del enlace
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
    
    // Establecer enlace activo al cargar la página
    setActiveNavLink();
    
    // Función para cerrar sidebar en dispositivos móviles al cambiar orientación
    function handleOrientationChange() {
        if (window.innerWidth <= 768 && isSidebarOpen) {
            closeSidebar();
        }
    }
    
    // Event listener para cambio de orientación
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Función para cerrar sidebar al redimensionar la ventana
    function handleResize() {
        if (window.innerWidth <= 768 && isSidebarOpen) {
            closeSidebar();
        }
    }
    
    // Event listener para redimensionamiento
    window.addEventListener('resize', handleResize);
    
    // Función para mostrar/ocultar botón del sidebar según scroll
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            sidebarToggle.style.opacity = '0.8';
        } else {
            sidebarToggle.style.opacity = '1';
        }
    }
    
    // Event listener para scroll
    window.addEventListener('scroll', handleScroll);
    
    // Función para mostrar notificación de sidebar
    function showSidebarNotification() {
        // Solo mostrar en la primera visita
        if (!localStorage.getItem('sidebarShown')) {
            setTimeout(() => {
                const notification = document.createElement('div');
                notification.className = 'sidebar-notification';
                notification.innerHTML = `
                    <div style="
                        position: fixed;
                        left: 80px;
                        top: 100px;
                        background: var(--primary-color);
                        color: white;
                        padding: 10px 15px;
                        border-radius: 20px;
                        font-size: 12px;
                        z-index: 1002;
                        animation: slideInRight 0.5s ease;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                    ">
                        💡 Haz clic en el botón azul para abrir el menú
                    </div>
                `;
                
                document.body.appendChild(notification);
                
                // Remover después de 5 segundos
                setTimeout(() => {
                    notification.remove();
                }, 5000);
                
                // Marcar como mostrado
                localStorage.setItem('sidebarShown', 'true');
            }, 2000);
        }
    }
    
    // Mostrar notificación después de un delay
    showSidebarNotification();
    
    // Exportar funciones para uso global
    window.Sidebar = {
        open: openSidebar,
        close: closeSidebar,
        toggle: toggleSidebar,
        isOpen: () => isSidebarOpen
    };
    
    console.log('Sidebar inicializado correctamente');
}

// ===== FUNCIONALIDADES GLOBALES =====
function initializeGlobalFeatures() {
    console.log('Inicializando funcionalidades globales...');
    
    // Función para mostrar mensajes de notificación
    window.showNotification = function(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--${type}-color);
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                max-width: 300px;
                animation: slideInRight 0.3s ease;
            ">
                ${message}
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Remover después del tiempo especificado
        setTimeout(() => {
            notification.remove();
        }, duration);
    };
    
    // Función para confirmar acciones
    window.confirmAction = function(message, callback) {
        if (confirm(message)) {
            callback();
        }
    };
    
    // Función para formatear fechas
    window.formatDate = function(date) {
        return new Date(date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    
    // Función para validar email
    window.isValidEmail = function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    // Función para validar teléfono
    window.isValidPhone = function(phone) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,15}$/;
        return phoneRegex.test(phone);
    };
    
    // Función para hacer scroll suave
    window.smoothScrollTo = function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    
    console.log('Funcionalidades globales inicializadas');
}

// ===== ANIMACIONES =====
function initializeAnimations() {
    console.log('Inicializando animaciones...');
    
    // Función para agregar animación de entrada a las tarjetas
    function animateCards() {
        const cards = document.querySelectorAll('.content-card');
        
        if (cards.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
    
    // Función para agregar efecto de hover en las tarjetas
    function setupCardHoverEffects() {
        const cards = document.querySelectorAll('.content-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Función para animar elementos al hacer scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Ejecutar animaciones
    animateCards();
    setupCardHoverEffects();
    animateOnScroll();
    
    console.log('Animaciones inicializadas');
}

// ===== FUNCIONES DE UTILIDAD =====

// Función para hacer peticiones AJAX
window.ajaxRequest = function(url, options = {}) {
    const defaultOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        ...options
    };
    
    return fetch(url, defaultOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error en petición AJAX:', error);
            throw error;
        });
};

// Función para debounce
window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Función para throttle
window.throttle = function(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Función para copiar texto al portapapeles
window.copyToClipboard = function(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            window.showNotification('Texto copiado al portapapeles', 'success');
        }).catch(err => {
            console.error('Error al copiar:', err);
            window.showNotification('Error al copiar texto', 'error');
        });
    } else {
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            window.showNotification('Texto copiado al portapapeles', 'success');
        } catch (err) {
            console.error('Error al copiar:', err);
            window.showNotification('Error al copiar texto', 'error');
        }
        document.body.removeChild(textArea);
    }
};

console.log('Main JS completamente cargado');
