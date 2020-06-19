const initialState = {
    listPokemon: [],
    detailPokemon: {}
}

export default function general (state = initialState, action) {
    switch (action.type) {
        case 'SET_LIST_POKEMON':
            return {...state, listPokemon: action.payload}
        case 'SET_DETAIL_POKEMON':
                return {...state, detailPokemon: action.payload}
        default:
            return state
    }
    
}