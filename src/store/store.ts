import {combineReducers, createStore} from "redux";
import {reducer1} from "./reducer1";
import {reducer2} from "./reducer2";

const rootReducer = combineReducers({
    reducer1: reducer1,
    reducer2: reducer2
})


export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

//все типы actions для всего App
// export type AppActionsType = ActionType1 | ActionType2

// @ts-ignore
window.store = store;