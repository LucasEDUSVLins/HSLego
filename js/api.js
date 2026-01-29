export async function fetch_cards(token) {
    // Usando a região 'us' e locale 'pt_BR' para garantir compatibilidade
    const url = `https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR&pageSize=50&access_token=${token}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Falha na API");
        const data = await response.json();
        return data.cards;
    } catch (error) {
        console.error("Erro ao buscar cartas:", error);
        return [];
    }
}