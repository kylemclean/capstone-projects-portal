import type Action from "./action"
import type State from "./state"

const Reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.value,
            }
        default:
            return state
    }
}

export default Reducer
