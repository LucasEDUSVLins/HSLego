import { render_home } from './js/homepage.js';
import { fetch_cards } from './js/api.js';
import { search_cards } from './js/filter.js';

let all_cards = [];

async function init() {
    const app = document.getElementById('app');
    app.innerHTML = render_home();

    // TOKEN TEMPORÁRIO: Para o GitHub Pages funcionar, você deve gerar 
    // um token no portal da Blizzard e colá-lo aqui, ou usar um Proxy.
    const temp_token = 'COLE_SEU_TOKEN_AQUI'; 

    const grid = document.getElementById('grid');
    all_cards = await fetch_cards(temp_token);
    
    render_grid(all_cards);
    setup_events();
}

function render_grid(cards) {
    const grid = document.getElementById('grid');
    grid.innerHTML = cards.map(card => `
        <div class="card-item">
            <img src="${card.image}" alt="${card.name}" style="width:100%">
        </div>
    `).join('');
}

function setup_events() {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        const filtered = search_cards(all_cards, e.target.value);
        render_grid(filtered);
    });
}

window.addEventListener('DOMContentLoaded', init);
