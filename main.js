import { render_home } from './js/homepage.js';
import { get_access_token, fetch_cards } from './js/api.js';
import { search_cards } from './js/filter.js';

let all_cards = []; // Cache local das cartas

async function init() {
    const app = document.getElementById('app');
    app.innerHTML = render_home();
    const grid = document.getElementById('grid');

    const token = await get_access_token();
    if (token) {
        all_cards = await fetch_cards(token);
        render_grid(all_cards);
        
        // Ativa a barra de pesquisa
        setup_search();
    }
}

function render_grid(cards_to_show) {
    const grid = document.getElementById('grid');
    if (cards_to_show.length === 0) {
        grid.innerHTML = "<p>Nenhuma carta encontrada.</p>";
        return;
    }
    grid.innerHTML = cards_to_show.map(card => `
        <div class="card-item">
            <img src="${card.image}" alt="${card.name}" style="width:100%">
        </div>
    `).join('');
}

function setup_search() {
    const input = document.getElementById('search');
    input.addEventListener('input', (e) => {
        const results = search_cards(all_cards, e.target.value);
        render_grid(results);
    });
}

window.addEventListener('DOMContentLoaded', init);
