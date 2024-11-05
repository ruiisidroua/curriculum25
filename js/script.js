document.addEventListener('DOMContentLoaded', function() {
    // Validação do formulário de contacto
    function validarFormmulari() {
        const myForm = document.getElementById('formulario-contacto');
        if (myForm) {
            myForm.addEventListener('submit', function(event) {
                event.preventDefault();
                if (myForm.checkValidity()) {
                    alert('Formulário enviado com sucesso! (Simulação)');
                    myForm.reset();
                } else {
                    alert('Por favor, preencha todos os campos corretamente.');
                }
            });
        }
    }

    // Calculadora de anos de experiência
    function calcularAnosExperiencia() {
        const btnCalcular = document.getElementById('calcular-experiencia');
        const inputDataInicio = document.getElementById('data-inicio');
        const resultadoExperiencia = document.getElementById('resultado-experiencia');

        if (btnCalcular && inputDataInicio && resultadoExperiencia) {
            btnCalcular.addEventListener('click', function() {
                const dataInicio = new Date(inputDataInicio.value);
                debugger;
                const { diferencaAnos, diferencaMeses, hoje } = getDataDetails(dataInicio);

                let anosExperiencia = diferencaAnos;
                if (diferencaMeses < 0 || (diferencaMeses === 0 && hoje.getDate() < dataInicio.getDate())) {
                    anosExperiencia--;
                }

                resultadoExperiencia.textContent = `João Silva tem aproximadamente ${anosExperiencia} anos de experiência profissional.`;
            });
        }
    }

    // Menu de navegação móvel
    function inicializarMenuMovel() {
        const navbar = document.querySelector('.navbar-toggler');
        if (navbar) {
            navbar.addEventListener('click', function() {
                document.body.classList.toggle('menu-aberto');
            });
        }
    }

    // Adicionar efeito de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mudar estilo da navbar ao rolar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('navbar-scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('navbar-scrolled');
        }
    });

    // Animação de entrada para elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
            }
        });
    });

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });

    // Inicializar tooltips do Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Inicializar funções
    validarFormmulari();
    calcularAnosExperiencia();
    inicializarMenuMovel();
});
function getDataDetails(dataInicio) {
    const hoje = new Date();
    const diferencaAnos = hoje.getFullYear() - dataInicio.getFullYear();
    const diferencaMeses = hoje.getMonth() - dataInicio.getMonth();
    return { diferencaAnos, diferencaMeses, hoje };
}

