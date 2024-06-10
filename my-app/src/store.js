import { createStore } from 'redux';

//defines the load-in state of the entire program

const initialState = {
    AmandaCorruption: 0,
};

function reducer(state, action) {
    if (action.type == 'corruptAmanda') {
        const newState = {...state};
        newState.AmandaCorruption += action.value;
        return newState;
    }
    else {
        return state;
    }
}

export const store = createStore(reducer, initialState);