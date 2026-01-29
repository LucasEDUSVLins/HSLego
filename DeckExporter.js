export function generateDeckCode(deck) {
    if (deck.length === 0) return "";
    const ids = deck.map(c => c.dbfId);
    return `### HSLego Deck\n# Código: ${btoa(JSON.stringify(ids))}`;
}

export async function copyToClipboard(text) {
    await navigator.clipboard.writeText(text);
    alert("Código copiado!");
}
