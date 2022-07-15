import { Action, createReducer , on} from "@ngrx/store";
import { CounterState } from "./counter-state.interface";
import { Increment } from "./counter.action";

export const initialState:CounterState={
    count:0
}

const _counterReducer = createReducer(initialState,
    on(Increment,(state:CounterState)=>{
        const count = state.count + 1;
        return {...state,count}
    })
)

export function counterreducer(state:any,action:Action){
    return _counterReducer(state,action);
}