import Cookies from 'js-cookie'

const initialState = {
    listPokemon: [],
    detailPokemon: JSON.parse(Cookies.get('detail')),
    notFound: false,
    pagination: {page: 1, limit: 20, offSet: 0}
}

export default function general (state = initialState, action) {
    switch (action.type) {
        case 'SET_LIST_POKEMON':
            return {...state, listPokemon: action.payload}
        case 'SET_DETAIL_POKEMON':
                return {...state, detailPokemon: action.payload}
        case 'SET_NOT_FOUND':
                return {...state, notFound: action.payload}
        case 'SET_PAGINATION':
                return {...state, pagination: action.payload}
        default:
            return state
    }
    
}