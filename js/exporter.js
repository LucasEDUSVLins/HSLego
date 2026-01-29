export function export_to_game(deck) {
    return btoa(JSON.stringify(deck));
}