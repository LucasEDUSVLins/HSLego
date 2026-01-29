/**
 * js/filter.js - Lógica de busca em tempo real
 */
export function search_cards(cards, term) {
    const query = term.toLowerCase().trim();
    if (!query) return cards;

    return cards.filter(card => {
        return card.name.toLowerCase().includes(query) || 
               (card.text && card.text.toLowerCase().includes(query));
    });
}