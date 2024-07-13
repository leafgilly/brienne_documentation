import { createStore } from 'redux';

//defines the load-in state of the entire program

const initialState = {
    //VISITED PAGES
    MorganVisited: 0,
    AmandaVisited: 0,
    RitaVisited: 0,
    SallyVisited: 0,
    //MORGAN VALUES
    MorganName: ['Morgan', ' ', 'Becquerel'],
    MorganCorruption: 0,
    MorganOpacity: 0.0,
    MorganLight: 0,
    //AMANDA VALUES
    AmandaName: ['Amanda', ' ', 'Valentine'],
    AmandaCorruption: 0,
    AmandaHover: 0,
    //RITA VALUES
    RitaName: ['Rita', ' ', 'Zeppeli'],
    RitaCorruption: 0,
    
    //SALLY VALUES
    SallyName: ['Sally', ' ', 'Reed'],
    SallyCorruption: 0,
};

function reducer(state, action) {
    if (action.type === 'visitMorgan') {
        const newState = {...state};
        newState.MorganVisited += action.value;
        newState.MorganName[0] = '██████';
        newState.MorganName[2] = '█████████';
        return newState;
    }else if (action.type === 'corruptMorgan') {
        const newState = {...state};
        newState.MorganCorruption += action.value;
        return newState;
    } else if (action.type === 'morganOpacity') {
        const newState = {...state};
        newState.MorganOpacity += action.value;
        return newState;
    } else if (action.type === 'morganLight') {
        const newState = {...state};
        newState.MorganLight += action.value;
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
        newState.AmandaName[0] = 'Ä̷̼́m̴͜͝█̸̳̾ń̷̼d̴̼̑ȃ̴̮';
        newState.AmandaName[2] = 'V̵̂ͅa̵̢͗l̸̮̆█̶̟̂n̸̖̕t̵̮͆i̵͖̎n̷̛̖█̷̯̍';
        return newState;
    } else if (action.type === 'corruptRita') {
        const newState = {...state};
        newState.RitaCorruption += action.value;
        return newState;
    } else if (action.type === 'corruptSally') {
        const newState = {...state};
        newState.SallyCorruption += action.value;
        return newState;
    } else if (action.type === 'visitRita') {
        const newState = {...state};
        newState.RitaVisited += action.value;
        return newState;
    } 
    else if (action.type === 'renameRita') {
        const newState = {...state};
        newState.RitaName[0] = action.value;
        newState.RitaName[2] = 'Z̷͚͊ě̶͓p̶̦̔p̵͙̄e̸͍͠l̸̨̐ḯ̶͓';
        return newState;
    } else if (action.type === 'visitSally') {
        const newState = {...state};
        newState.SallyVisited += action.value;
        newState.SallyName[0] = 'TEST';
        newState.SallyName[2] = 'TEST2';
    } else {
        return state;
    }
}

export const store = createStore(reducer, initialState);