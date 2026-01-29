import { renderHomePage } from './HomePage.js';
import { renderPrivacyPolicy } from './PrivacyPolicy.js';
import { renderTermsOfUse } from './TermsOfUse.js';

function init() {
    const app = document.getElementById('app');
    if (!app) {
        console.error("Elemento #app não encontrado!");
        return;
    }

    // Inicializa com a Home
    app.innerHTML = renderHomePage();
    console.log("HSLego iniciado com sucesso!");

    // Listener para navegação simples (se os IDs existirem no rodapé da HomePage)
    document.addEventListener('click', (e) => {
        if (e.target.id === 'view-privacy') {
            app.innerHTML = renderPrivacyPolicy();
        } else if (e.target.id === 'view-terms') {
            app.innerHTML = renderTermsOfUse();
        } else if (e.target.id === 'view-home') {
            app.innerHTML = renderHomePage();
        }
    });
}

// Garante que o script rode após o HTML carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
