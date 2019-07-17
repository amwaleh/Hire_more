import {
  STARTUP,
  STARTUP_CLIENT,
} from './actionTypes'


const initialState = {
  ts: null,
}

/* --------------------------------------------------------
   * Action Creators
   */

/**
   * Dispatched on app startup
   *
   * @param {boolean} isServer
   */
export const startup = (isServer) => {
  console.log('startup')

  return { type: isServer ? STARTUP : STARTUP_CLIENT, ts: new Date(), isServer }
}

/* --------------------------------------------------------
   * Reducer
   */
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STARTUP:
      return {
        ...state,
        ts: {
          ...state.ts,
          [action.isServer ? 'server' : 'client']: action.ts,
        },
      }

    case STARTUP_CLIENT:
      return { ...state, ts: { ...state.ts, client: action.ts } }

    default:
      return state
  }
}

