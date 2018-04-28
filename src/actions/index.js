export function selectBook(book) {
    // selectBook is an Action Creator, it needs to return an Action(an object with a type property)
    return {
        type: 'BOOK_SELECTED',  // can be a simple string, should be stored in a const variable, upper-case
        payload: book
    };
}
