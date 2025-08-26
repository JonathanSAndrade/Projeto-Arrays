document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.container-buttons button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Efeito visual ao clicar
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Aqui você implementaria a lógica específica de cada botão
            // forEach, map, reduce, filter conforme necessário
            alert('Funcionalidade ' + this.textContent + ' será implementada aqui!');
        });
    });
    
    // Efeito de parallax para as estrelas de fundo
    document.addEventListener('mousemove', function(e) {
        const stars = document.querySelector('body');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        stars.style.backgroundPosition = `${x * 50}px ${y * 50}px, ${40 + x * 30}px ${60 + y * 30}px, ${130 + x * 20}px ${270 + y * 20}px`;
    });
});