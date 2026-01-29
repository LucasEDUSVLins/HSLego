export function setup_filter() {
    const input = document.getElementById('search');
    if (!input) return;

    input.addEventListener('input', (e) => {
        console.log("Filtrando por:", e.target.value);
        // Lógica de filtro será conectada aqui
    });
}