import { renderHomePage } from './HomePage.js';
import { DeckManager } from './DeckManager.js';
import { filterCards, debounceSearch } from './CardFilter.js';
import { generateDeckCode, copyToClipboard } from './DeckExporter.js';
import { renderPrivacyPolicy } from './PrivacyPolicy.js';
import { renderTermsOfUse } from './TermsOfUse.js';

let allCards = []; 

async function init() {
    const app = document.getElementById('app');
    app.innerHTML = renderHomePage();

    const searchInput = document.getElementById('card-search');
    searchInput.addEventListener('input', debounceSearch((e) => {
        const filtered = filterCards(allCards, e.target.value);
        // Lógica de renderização do grid aqui
    }));

    document.getElementById('view-privacy').onclick = () => app.innerHTML = renderPrivacyPolicy();
    document.getElementById('view-terms').onclick = () => app.innerHTML = renderTermsOfUse();
    document.getElementById('view-home').onclick = () => init();
}

init();
