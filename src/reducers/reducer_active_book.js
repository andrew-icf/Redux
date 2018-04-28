// all reducers can get two arguements, the current state and action
// State is not application state, only the state this reducer is responsible for
export default function(state = null, action) { // if the state is undefined set it to null
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state; // if we don't care about the current action, pass the state back through
}
// It's really important that we never mutate our current state to produce a new version of the state
