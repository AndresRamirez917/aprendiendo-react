import axios from "axios"
// las 3 reglas redux

// constantes (los almacena para usarlos a través de un componente)
const dataInicial = {
    array : []
}

const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"

// reducer (acepta la api y la envia a las constantes)
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload};
            default:
                return state
    }
}

// acciones (llamado api pokemon)           !dos funciones flecha¡
export const obtenerPokemonAccion = () => async (dispatch, getstate) =>{
    try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.resuts
        })
    } catch (error) {
        console.log(error)
    }
}