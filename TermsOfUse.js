/**
 * Conteúdo dos Termos de Uso do HSLego.
 * Revisão: Adicionada cláusula de isenção de responsabilidade da marca.
 */
export function renderTermsOfUse() {
    return `
        <div class="legal-container">
            <h1>Termos de Uso</h1>
            <p>Ao utilizar o HSLego, você concorda com os seguintes termos:</p>
            
            <h3>1. Uso do Serviço</h3>
            <p>O HSLego é uma ferramenta gratuita criada para auxiliar jogadores na montagem de decks. Não possuímos vínculo oficial com a Blizzard Entertainment.</p>
            
            <h3>2. Propriedade Intelectual</h3>
            <p>Hearthstone e todas as imagens relacionadas são marcas registradas da Blizzard Entertainment. O uso neste site é de caráter informativo/ferramenta de fã.</p>
            
            <h3>3. Limitação de Responsabilidade</h3>
            <p>O HSLego não garante que os decks criados resultarão em vitórias. A funcionalidade de exportação depende da compatibilidade contínua com o cliente do jogo.</p>
        </div>
    `;
}
