export function render_home() {
    return `
        <div class="container">
            <header>
                <h1 style="color: var(--primary);">HSLego</h1>
                <p>Simples • Otimizado • Inteligente</p>
            </header>
            <input type="text" id="search" placeholder="Pesquisar cartas ou sinergias...">
            <div class="layout">
                <section id="grid">
                    <p>Carregando cartas...</p>
                </section>
                <aside id="sidebar">
                    <h3>Seu Deck</h3>
                    <div id="deck-list"></div>
                    <div id="synergy-box" style="margin: 15px 0; color: #4a90e2; font-size: 0.9rem;"></div>
                    <button class="btn" id="export-deck">Exportar Deck</button>
                </aside>
            </div>
        </div>
    `;
}