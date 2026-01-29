export function filterCards(cards, term) {
    const t = term.toLowerCase();
    return cards.filter(c => c.name.toLowerCase().includes(t) || (c.text && c.text.toLowerCase().includes(t)));
}

export function debounceSearch(func, delay = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
