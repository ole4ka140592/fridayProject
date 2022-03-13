type initialStateType = {
    age: number
}
let initialState = {age: 1}

export const reducer1 = (state: initialStateType = initialState, action: ActionType1): initialStateType => {
    switch (action.type) {
        case "add1": {
            return state
        }

        default:
            return state
    }
}

//actions
export const add1AC = () => {
    return {
        type: "add1"
    } as const
}

//types
type ActionType1 = type1
type type1 = ReturnType<typeof add1AC>
