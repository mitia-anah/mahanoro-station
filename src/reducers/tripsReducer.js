export function trips(state = [], action) {
    // console.log(action.value);
    switch (action.type) {
        case "GET_TRIPS":
            return action.value
        default:
            return state
    }
}
