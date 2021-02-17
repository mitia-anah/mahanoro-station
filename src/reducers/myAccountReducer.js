export default function myAccount(state = [], action) {
    // console.log(action.payload);
    switch(action.type) {
        case 'USER_ACCOUNT':
            return [...state, action.payload]
        default:
            return state
    }
}