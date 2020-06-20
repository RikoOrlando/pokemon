import axios from 'axios'
import Cookies from 'js-cookie'

const formatedData = (payload) => {
    let dataFormated  = payload.map((el) => {
        let idPoke = el.url.split('/')
        let id = idPoke[idPoke.length -2]
        return {
            imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            name: el.name,
            id: `${id}`,
        }
    })
    return dataFormated
}

const formatDetail = (payload) => {
    let data = {
        name: payload.name,
        id: payload.id,
        tipe: payload.types.map(el => el.type.name),
        baseStatus: [{weight: payload.weight}, {exp: payload.base_experience}, {height: payload.height}],
        statistic: payload.stats.map(el => {return {name: el.stat.name, value: el.base_stat}}),
        imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${payload.id}.png`,
        moves: [payload.moves[0].move.name, payload.moves[2].move.name, payload.moves[3].move.name]

    }
    return data
}

export const fetchRandomdata = () => (dispatch, getState) => {
    const {pagination} = getState()
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pagination.limit}&offset=${pagination.offSet}`)
    .then(({data}) => {
        const formated = formatedData(data.results)
        dispatch({type: 'SET_LIST_POKEMON', payload: formated})
    })
}

export const fetchDetailPokemon = (id, history) => (dispatch) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(({data}) => {
        const formated = formatDetail(data)
        dispatch({type: 'SET_DETAIL_POKEMON', payload: formated})
        Cookies.set('detail', JSON.stringify(formated), { expires: 1 });
        history.push('/detail')
    })
}

export const findPokemon = (name, history) => (dispatch) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(({data}) => {
        const formated = formatDetail(data)
        dispatch({type: 'SET_DETAIL_POKEMON', payload: formated})
        history.push('/detail')
        Cookies.set('detail', JSON.stringify(formated), { expires: 1 });
    })
    .catch(() => {
        dispatch({type: 'SET_NOT_FOUND', payload: true})
    })
}

export const closedNotFound = () => (dispatch) => {
    dispatch({type: 'SET_NOT_FOUND', payload: false})
}

export const nextPage = () => (dispatch, getState) => {
    const {pagination} = getState()
    const payload = {page: pagination.page + 1, limit: pagination.limit, offSet: pagination.offSet + 20}
    dispatch({type: 'SET_PAGINATION', payload})
    // Cookies.set('page', JSON.stringify(payload), { expires: 1 });
    dispatch(fetchRandomdata())

}

export const prevPage = () => (dispatch, getState) => {
    const {pagination} = getState()
    const payload = {page: pagination.page - 1, limit: pagination.limit, offSet: pagination.offSet - 20}
    dispatch({type: 'SET_PAGINATION', payload})
    // Cookies.set('page', JSON.stringify(payload), { expires: 1 });
    dispatch(fetchRandomdata())
}
