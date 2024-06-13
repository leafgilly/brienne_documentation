import { createStore } from 'redux';

//defines the load-in state of the entire program

const initialState = {
    MorganCorruption: 0,
    MorganOpacity: 0.0,
    AmandaCorruption: 0,
};

function reducer(state, action) {
    if (action.type === 'corruptAmanda') {
        const newState = {...state};
        newState.AmandaCorruption += action.value;
        return newState;
    } else if (action.type === 'corruptMorgan') {
        const newState = {...state};
        newState.MorganCorruption += action.value;
        return newState;
    } else if (action.type === 'morganOpacity') {
        const newState = {...state};
        newState.MorganOpacity += action.value;
        return newState;
    }
    else {
        return state;
    }
}

export const store = createStore(reducer, initialState);