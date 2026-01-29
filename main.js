import { render_home } from './js/homepage.js';
import { get_access_token, fetch_cards } from './js/api.js';

async function init() {
    const app = document.getElementById('app');
    app.innerHTML = render_home();

    const grid = document.getElementById('grid');
    
    // 1. Pega o Token
    const token = await get_access_token();
    
    if (token) {
        // 2. Busca as cartas
        const cards = await fetch_cards(token);
        
        // 3. Renderiza no Grid
        grid.innerHTML = cards.map(card => `
            <div class="card-item" style="cursor:pointer">
                <img src="${card.image}" alt="${card.name}" style="width:100%">
            </div>
        `).join('');
    } else {
        grid.innerHTML = "<p>Erro ao conectar com a Blizzard. Verifique suas credenciais.</p>";
    }
}

window.addEventListener('DOMContentLoaded', init);
