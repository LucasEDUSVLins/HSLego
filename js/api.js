/**
 * js/api.js - Conexão com a Battle.net
 */

// NOTA: Em um ambiente de produção, o token deve ser gerado por um servidor.
// Para testar seu projeto, você pode gerar um token no portal da Blizzard.
const CLIENT_ID = 'a9625445e873468fb8765c1123d447bb';
const CLIENT_SECRET = 'AFJJJWSoXwfvkugqaFFYa438MSb44Sz6';

export async function get_access_token() {
    const auth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    try {
        const response = await fetch('https://oauth.battle.net/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Erro ao obter token:", error);
        return null;
    }
}

export async function fetch_cards(token, region = 'us', locale = 'pt_BR') {
    const url = `https://${region}.api.blizzard.com/hearthstone/cards?locale=${locale}&access_token=${token}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Otimização: retornamos apenas o que o HSLego precisa
        return data.cards.map(card => ({
            id: card.id,
            dbfId: card.dbfId,
            name: card.name,
            image: card.image,
            manaCost: card.manaCost,
            rarityId: card.rarityId,
            text: card.text,
            race: card.raceId
        }));
    } catch (error) {
        console.error("Erro ao buscar cartas:", error);
        return [];
    }
}