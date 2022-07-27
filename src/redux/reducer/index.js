const initialState = {
    token: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_RECIPE":
            return {
                ...state,recipies:payload
            }
        default:
            return state
    }
}


export default reducer