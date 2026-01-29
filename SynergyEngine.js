export function getSynergySuggestions(deck) {
    const keywords = deck.flatMap(c => c.keywords || []);
    if (keywords.includes("Grito de Guerra")) return ["Sinergia: Adicione cartas que ativam Gritos de Guerra duplicados!"];
    return ["Adicione mais cartas para ver sinergias."];
}
