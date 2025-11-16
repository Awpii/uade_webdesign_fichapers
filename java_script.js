document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Función para aplicar el tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Al cargar la página, revisa si hay un tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Evento para cambiar el tema
    themeToggle.addEventListener('click', () => {
        let newTheme = 'light';
        if (!body.classList.contains('dark-mode')) {
            newTheme = 'dark';
        }
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Guarda la preferencia
    });
});