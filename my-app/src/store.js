import { createStore } from 'redux';

//defines the load-in state of the entire program

const initialState = {
    //VISITED PAGES
    MorganVisited: 0,
    AmandaVisited: 0,
    //MORGAN VALUES
    MorganName: 'Morgan',
    MorganCorruption: 0,
    MorganOpacity: 0.0,

    //AMANDA VALUES
    AmandaName: 'Amanda',
    AmandaCorruption: 0,
    AmandaHover: 0,
};

function reducer(state, action) {
    if (action.type === 'visitMorgan') {
        const newState = {...state};
        newState.MorganVisited += action.value;
        newState.MorganName = '██████';
        return newState;
    }else if (action.type === 'corruptMorgan') {
        const newState = {...state};
        newState.MorganCorruption += action.value;
        return newState;
    } else if (action.type === 'morganOpacity') {
        const newState = {...state};
        newState.MorganOpacity += action.value;
        return newState;
    } else if (action.type === 'corruptAmanda') {
        const newState = {...state};
        newState.AmandaCorruption += action.value;
        return newState;
    } else if (action.type === 'amandaHover') {
        const newState = {...state};
        newState.AmandaHover += action.value;
        return newState;
    } else if (action.type === 'visitAmanda') {
        const newState = {...state};
        newState.AmandaVisited += action.value;
        newState.AmandaName = 'AMANDAAAAAA';
        return newState;
    }
    else {
        return state;
    }
}

export const store = createStore(reducer, initialState);