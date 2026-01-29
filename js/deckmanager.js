export const deck_manager = {
    list: [],
    add(card) {
        if (this.list.length < 30) this.list.push(card);
        return this.list;
    }
};