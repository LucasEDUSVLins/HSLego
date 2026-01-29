/**
 * Conteúdo da Política de Privacidade do HSLego.
 * Revisão: Foco em transparência e conformidade com o uso de APIs de terceiros.
 */
export function renderPrivacyPolicy() {
    return `
        <div class="legal-container">
            <h1>Política de Privacidade</h1>
            <p>Última atualização: 29 de Janeiro de 2026</p>
            
            <h3>1. Coleta de Dados</h3>
            <p>O HSLego não coleta informações de identificação pessoal. As preferências de deck são processadas localmente no seu navegador.</p>
            
            <h3>2. APIs de Terceiros</h3>
            <p>Utilizamos a API oficial da Blizzard Entertainment para fornecer dados sobre as cartas. Ao utilizar este site, você reconhece que as imagens e dados das cartas são propriedade da Blizzard.</p>
            
            <h3>3. Cookies</h3>
            <p>Podemos utilizar armazenamento local (localStorage) apenas para salvar o seu deck atual para que você não o perca ao atualizar a página.</p>
        </div>
    `;
}
