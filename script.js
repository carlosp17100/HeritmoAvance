// Funciones para manejar modales
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll del body
    }
}

// Función para el botón de presentaciones
function openPresentationLink() {
    // Aquí puedes cambiar la URL por la que necesites
    const presentationURL = prompt("Ingresa la URL de la presentación:", "https://");
    if (presentationURL && presentationURL !== "https://" && presentationURL !== null) {
        window.open(presentationURL, '_blank');
    }
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Animaciones de entrada para elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .academic-card, .music-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', function() {
    // Preparar elementos para animación
    const elements = document.querySelectorAll('.card, .academic-card, .music-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Ejecutar animación inicial
    setTimeout(animateOnScroll, 100);
    
    // Ejecutar animación en scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Efectos de hover mejorados para botones
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.modal-btn, .btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Smooth scroll para navegación interna (si es necesario)
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Función para regresar al inicio desde cualquier sección
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}