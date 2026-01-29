/**
 * js/api.js - Configuração da API Blizzard
 */

// 1. Suas credenciais do portal develop.battle.net
const CLIENT_ID = 'a9625445e873468fb8765c1123d447bb';
const CLIENT_SECRET = 'AFJJJWSoXwfvkugqaFFYa438MSb44Sz6';

// Função para gerar o Token de Acesso (Duração de 24h)
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

// Função para buscar as cartas usando o token gerado
export async function fetch_cards(token) {
    const url = `https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR&access_token=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.cards;
}