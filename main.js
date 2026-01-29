import { render_home } from './js/homepage.js';
import { setup_filter } from './js/filter.js';

async function init() {
    const app = document.getElementById('app');
    if (!app) return;

    // Renderiza a estrutura inicial
    app.innerHTML = render_home();
    
    // Inicializa a busca em tempo real
    setup_filter();

    console.log("HSLego iniciado com estrutura organizada.");
}

window.addEventListener('DOMContentLoaded', init);