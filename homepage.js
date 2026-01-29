export function renderHomePage() {
    return `
        <div class="hs-lego-container">
            <header style="text-align:center; padding: 20px;">
                <h1 style="color: #f3d298;">HSLego</h1>
                <p>Interface Simples e Limpa</p>
            </header>
            <main style="max-width: 1000px; margin: 0 auto; padding: 0 20px;">
                <input type="text" id="card-search" placeholder="Pesquisar cartas..." 
                       style="width: 100%; padding: 12px; border-radius: 8px; background: #2d2d2d; color: white; border: 1px solid #444;">
                
                <div style="display: flex; gap: 20px; margin-top: 20px;">
                    <section id="cards-grid" style="flex: 2; min-height: 300px; border: 1px dashed #444; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <p>Aguardando integração com a API...</p>
                    </section>
                    
                    <aside style="flex: 1; background: #222; padding: 15px; border-radius: 8px;">
                        <h3>Seu Deck</h3>
                        <div id="deck-list"></div>
                        <button style="width: 100%; padding: 10px; background: #f3d298; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 5px;">
                            Exportar para o Jogo
                        </button>
                    </aside>
                </div>
            </main>
            <footer style="text-align: center; margin-top: 40px; font-size: 0.8rem;">
                <button id="view-home" style="background:none; border:none; color:#f3d298; cursor:pointer;">Home</button> |
                <button id="view-privacy" style="background:none; border:none; color:#888; cursor:pointer;">Privacidade</button> |
                <button id="view-terms" style="background:none; border:none; color:#888; cursor:pointer;">Termos</button>
            </footer>
        </div>
    `;
}
