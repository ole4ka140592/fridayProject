type initialStateType = {
    age: number
}
let initialState = {age: 2}

export const reducer2 = (state: initialStateType = initialState, action: ActionType2): initialStateType => {
    switch (action.type) {
        case "add2": {
            return state
        }

        default:
            return state
    }
}

//actions
export const add2AC = () => {
    return {
        type: "add2"
    } as const
}

//types
type ActionType2 = type2
type type2 = ReturnType<typeof add2AC>
