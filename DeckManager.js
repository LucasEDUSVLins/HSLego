import { getSynergySuggestions } from './SynergyEngine.js';

export const DeckManager = {
    currentDeck: [],
    addCard(card) {
        if (this.currentDeck.length >= 30) return alert("Limite de 30 cartas!");
        this.currentDeck.push(card);
        this.currentDeck.sort((a, b) => a.manaCost - b.manaCost);
        return { deck: this.currentDeck, suggestions: getSynergySuggestions(this.currentDeck) };
    }
};
